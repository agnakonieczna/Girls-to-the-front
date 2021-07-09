import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  position: relative;
  max-width: 958px;
  margin: 0 auto;
`;

export const Background = styled(motion.div)`
  width: 100%;
  height: 50rem;
  background-image: url('/images/concerts-background.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 25%;
  left: 0;

  @media (min-width: 425px) {
    top: 0;
  }

  @media (min-width: 768px) {
    top: -5%;
    background-size: contain;
  }
`;
