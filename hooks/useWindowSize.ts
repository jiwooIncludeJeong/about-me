import { useEffect, useState } from 'react';
import { size } from '@styles/defaultTheme';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const isTablet = windowSize.width < size.grid2;
  const isMobile = windowSize.width < size.grid3;

  const { width } = windowSize;
  const { height } = windowSize;

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width,
    height,
    isTablet,
    isMobile,
  };
};

export default useWindowSize;
