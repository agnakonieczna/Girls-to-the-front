import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Caption = styled.p`
  font-size: 1rem;
  position: absolute;
  right: -5.5rem;
  transform: rotate(-90deg);

  @media (min-width: 768px) {
    right: -5rem;
  }
`;
