import { useEffect } from 'react';

const useScrollLock = (lock: boolean) => {
  useEffect(() => {
    const bodyLock = () => {
      window.document.body.style.overflow = 'hidden';
    };

    const bodyUnlock = () => {
      window.document.body.style.overflow = 'unset';
    };
    if (lock) {
      bodyLock();
    }

    return () => {
      bodyUnlock();
    };
  }, [lock]);
};

export default useScrollLock;
