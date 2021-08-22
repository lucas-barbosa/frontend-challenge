import { RefObject, useEffect, useState } from 'react';

const useOnScreen = (ref: RefObject<HTMLDivElement>) => {
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { root: null, rootMargin: '0px', threshold: 0.8 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return onScreen;
};

export default useOnScreen;
