import styled from 'styled-components';
import { motion } from 'framer-motion';

export const RainbowBackground = styled(motion.div)`
  width: 100%;
  height: 50rem;
  background-image: url('/images/rainbow-background.svg');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 5%;
  left: 0;
  margin: 4.5rem auto 0;

  @media (min-width: 425px) {
    top: -5%;
  }

  @media (min-width: 500px) {
    top: -10%;
    height: 45rem;
  }

  @media (min-width: 768px) {
    top: -5%;
    height: 40rem;
    background-size: contain;
  }

  
  @media (min-width: 1024px) {
    top: -10%;
    height: 45rem;
  }
`;

export const Rainbow = styled.div`
  position: relative;
  margin: 4.5rem auto 0;
  padding: 9rem 3.5rem;

  @media (min-width: 768px) {
    padding: 8rem 0;
    max-width: 958px;
  }


  & > p {
    @media (min-width: 768px) {
      padding: 0 10rem;
    }
  }
`;

export const RainbowImage = styled.img`
  width: 50px;
  position: absolute;
  top: ${({ top }) => top && '2rem'};
  left: ${({ top }) => top && '0.5rem'};
  bottom: ${({ bottom }) => bottom && '2rem'};
  right: ${({ bottom }) => bottom && '0.5rem'};
  transform: ${({ bottom }) => bottom && 'rotate(-180deg)'};

  @media (min-width: 768px) {
    width: 90px;
    left: ${({ top }) => top && '1.5rem'};
    right: ${({ bottom }) => bottom && '1.5rem'};
  }

  @media (min-width: 1024px) {
    left: ${({ top }) => top && '0'};
    right: ${({ bottom }) => bottom && '0'};
  }
`;
