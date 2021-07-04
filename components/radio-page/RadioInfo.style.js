import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FlexWrapper = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 2rem;
    display: flex;
    align-items: ${({ start }) => (start ? 'flex-start' : 'center')};
    justify-content: space-between;
    margin-top: ${({ top }) => top && '4rem'};
  }
`;

export const TextWrapper = styled.div`
  @media (min-width: 768px) {
    width: 55%;
  }
`;

export const ImageWrapper = styled(motion.div)`
  @media (min-width: 768px) {
    width: 45%;
  }
`;
