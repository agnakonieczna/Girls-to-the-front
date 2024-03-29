import styled from 'styled-components';
import { motion } from 'framer-motion';

const ImageWrapper = styled(motion.div)`
  margin: 0 auto 2rem;
  width: fit-content;
  position: relative;

  @media (min-width: 768px) {
    margin: 0 ${({ center }) => center && 'auto'};
    margin-bottom: ${({ marginBottom }) => marginBottom && marginBottom};
    align-self: ${({ align }) => align === 'end' && 'flex-end'};
    margin-right: ${({ marginRight }) => marginRight && '3rem'};
    margin-left: ${({ marginLeft }) => marginLeft && '3rem'};
    width: ${({width}) => width && width};
    height: auto;
    position: ${({absolute}) => absolute && 'absolute'};
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    max-width: 40rem;
  }
`;

export default ImageWrapper;
