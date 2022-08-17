import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

const useObserve = (
  divRef: RefObject<HTMLDivElement>,
  onObserve: () => void,
  onUnobserve?: () => void,
  customOptions?: IntersectionObserverInit,
) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = (focus: boolean) => {
    setIsFocused(focus);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onUnFocus = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.3, // 30% 보여질 때 onObserve
    };
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (divRef.current) {
            onObserve();
            onFocus();
          }
        } else {
          if (divRef.current) {
            onUnobserve && onUnobserve();
            onUnFocus();
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      callback,
      customOptions ?? options,
    );
    divRef.current && observer.observe(divRef.current);

    return () => {
      divRef.current && observer.unobserve(divRef.current);
    };
  }, []);

  return {
    isFocused,
    handleFocus,
  };
};

export default useObserve;
