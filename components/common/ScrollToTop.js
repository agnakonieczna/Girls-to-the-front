import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import smoothscroll from 'smoothscroll-polyfill';

const ImageWrapper = styled(motion.div)`
  width: 4.75rem;
  height: 4.75rem;
  position: fixed;
  bottom: 3rem;
  right: 1.5rem;
  cursor: pointer;
  z-index: 100;

  @media (min-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    smoothscroll.polyfill();

    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div onClick={scrollToTop}>
      <AnimatePresence>
        {isVisible && (
          <ImageWrapper
            initial={{ y: 100, opacity: 0 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            exit={{ y: 100, opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.img src='/images/finger-up.svg' alt='finger-up' />
          </ImageWrapper>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTop;
