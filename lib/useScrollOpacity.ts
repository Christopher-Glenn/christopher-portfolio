import { useEffect, useState } from 'react';

const SCROLL_START = 300;
const SCROLL_END = 800;

export function useScrollOpacity() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setScrollY(window.scrollY), 16); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return Math.min(Math.max((scrollY - SCROLL_START) / (SCROLL_END - SCROLL_START), 0), 1);
}