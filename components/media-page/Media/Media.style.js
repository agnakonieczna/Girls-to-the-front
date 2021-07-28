import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MediaTitle = styled.h2`
  font-size: 4rem;
  font-family: 'Monument Extended Bold';
  color: ${({ theme }) => theme.colors.fuchsia};
  font-weight: 700;
  text-align: center;
  margin: 2rem 0;
  padding: 2rem;
  -webkit-text-stroke: 0.5px black;
  position: relative;
  z-index: 1;
`;

export const MediaTitleBackground = styled(motion.div)`
  position: absolute;
  background-image: url('/images/media-background.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  height: 7rem;
  width: 100%;
  top: 0.5rem;
  left: 0;

  @media (min-width: 768px) {
    height: 8rem;
  }
`;

export const MediaList = styled.ul`
  margin-bottom: 2rem;
`;
