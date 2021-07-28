import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Title = styled.h2`
font-size: 2.5rem;
font-family: 'Monument Extended Bold';
color: transparent;
font-weight: 700;
text-align: center;
margin: 3rem 0;
padding: 5rem;
-webkit-text-stroke: 0.5px black;

@media (min-width: 768px) {
  padding: 9.5rem 0;
  font-size: 4rem;
  margin: 7.5rem 0 9rem;
}
`;

export const TitleBackground = styled(motion.div)`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 18rem;
background-image: url('/images/zines-title-background.svg');
background-repeat: no-repeat;
background-size: contain;
background-position: center;

@media (min-width: 768px) {
  height: 37rem;
  background-position: top center;
}
`;

export const TitleWrapper = styled.div`
position: relative;
`;
