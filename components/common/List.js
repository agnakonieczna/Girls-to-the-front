import styled from 'styled-components';
import { motion } from 'framer-motion';

export const List = styled.ul`
  padding: 3rem;

  @media (min-width: 768px) {
    padding-left: 3rem;
  }
`;

export const ListWrapper = styled.div`
  position: relative;
  
  @media (min-width: 768px) {
    width: 80%;
  }
`;

export const ListBackground = styled(motion.div)`
  background-image: url('/images/about-us-list-background.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60rem;
  width: 110%;
  position: absolute;
  top: -20%;
  left: 0;
  z-index: -1;

  @media (min-width: 425px) {
    top: -20%;
    height: 50rem;
  }

  @media (min-width: 768px) {
    background-size: cover;
    background-position: 100% 50%;
    height: 100%;
    top: 0;
    left: unset;
    right: 0;
  }
`;
