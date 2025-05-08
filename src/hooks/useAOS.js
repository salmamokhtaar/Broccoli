import { useEffect } from 'react';

/**
 * Custom hook to initialize and refresh AOS animations
 */
export const useAOS = () => {
  useEffect(() => {
    // Check if AOS is available globally
    if (typeof window !== 'undefined' && window.AOS) {
      // Refresh AOS
      window.AOS.refresh();
    }
  }, []);
};

export default useAOS;
