import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const Paragraph = styled(motion.p)`
  margin-bottom: ${({noMargin}) => noMargin ? '0' : '3rem'};
  line-height: 35px;
  -webkit-text-stroke: 0.9px black;
  color: ${({ theme }) => theme.colors.marine};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  & > a {
    color: ${({ theme }) => theme.colors.marine};
    -webkit-text-stroke: 0.9px black;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.marine};
  }

  @media (min-width: 768px) {
    width: ${({ width }) => width};
    line-height: 35px;
  }

  ${({ blue }) =>
    blue &&
    css`
      color: ${({ theme }) => theme.colors.blue};
      font-weight: ${({ bold }) => bold && 700};

      & > a {
        color: ${({ theme }) => theme.colors.blue};
        border-bottom: 0.2rem solid ${({ theme }) => theme.colors.blue};
      }
    `}

  ${({ pink }) =>
    pink &&
    css`
      -webkit-text-fill-color: ${({ theme }) => theme.colors.pink};
      font-weight: ${({ bold }) => bold && 700};

      & > a {
        color: ${({ theme }) => theme.colors.pink};
        border-bottom: 0.2rem solid ${({ theme }) => theme.colors.pink};
      }
    `}
`;


export default Paragraph;

