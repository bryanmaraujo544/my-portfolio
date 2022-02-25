import { useRef, useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export const useScrollAnimation = () => {
  const sectionRef = useRef(null) as any;
  const controls = useAnimation();

  useEffect(() => {
    const sectionTop = sectionRef?.current.offsetTop;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > sectionTop - window.innerHeight / 1.5) {
        controls.start({
          opacity: 1,
          y: '0',
          transition: { type: 'spring', stiffness: 100 },
        });
      } else {
        controls.start({
          y: 32,
          opacity: 0,
          transition: { type: 'spring', stiffness: 100 },
        });
      }
    });
  }, []);

  return { sectionRef, controls };
};
