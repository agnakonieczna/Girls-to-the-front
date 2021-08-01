import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Title = styled.h2`
  font-size: 2rem;
  font-family: 'Monument Extended Bold';
  color: transparent;
  font-weight: 700;
  text-align: center;
  margin: 3rem 0;
  padding: 5rem;
  -webkit-text-stroke: 0.5px black;

  @media (min-width: 768px) {
    padding: 9.5rem 0;
    font-size: 3rem;
    margin: 7.5rem 0 9rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

export const TitleBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15rem;
  background-image: url('/images/zines-title-background.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media (min-width: 768px) {
    height: 22rem;
    background-position: top center;
    top: 2rem;
  }
  @media (min-width: 1024px) {
    height: 23rem;
    background-position: top center;
    top: 2rem;
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
`;
