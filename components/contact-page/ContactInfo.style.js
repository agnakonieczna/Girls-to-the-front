import styled from 'styled-components';
import Container from '../../components/common/Container';
import { motion } from 'framer-motion';

export const Caption = styled.p`
  font-size: 1rem;
  position: absolute;
  transform: rotate(-90deg);
  right: -5rem;
  bottom: 5rem;

  @media (min-width: 768px) {
    bottom: 10rem;
  }
`;

export const FlexWrapper = styled(Container)`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const TextWrapper = styled.div`
  @media (min-width: 768px) {
    width: 45%;
  }
`;
