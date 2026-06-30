import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      
      let attempts = 0;
      const maxAttempts = 40; // 4 seconds total (100ms interval)
      let found = false;
      let lastTop = 0;

      const intervalId = setInterval(() => {
        const lazyElement = document.getElementById(id);
        if (lazyElement) {
          const rect = lazyElement.getBoundingClientRect();
          const currentTop = rect.top + window.scrollY;

          // If we haven't scrolled to it yet, or if it shifted by more than 15px
          if (!found || Math.abs(currentTop - lastTop) > 15) {
            lazyElement.scrollIntoView({ behavior: 'smooth' });
            found = true;
            lastTop = currentTop;
          }
        }
        attempts++;
        if (attempts >= maxAttempts) {
          clearInterval(intervalId);
        }
      }, 100);

      return () => clearInterval(intervalId);
    } else {
      // Scroll to the top when navigating to a new page without a hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
