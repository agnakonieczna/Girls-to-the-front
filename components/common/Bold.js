import styled, { css } from 'styled-components';

const Bold = styled.span`
  font-weight: 700;

  > a {
    color: ${({ theme }) => theme.colors.marine};
    -webkit-text-stroke: 0.65px black;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.marine};
    cursor: pointer;
  }

  @media (min-width: 768px) {
    a {
      -webkit-text-stroke: 0.9px black;
    }
  }

  ${({ blue }) =>
    blue &&
    css`
      a {
        color: ${({ theme }) => theme.colors.blue};
        border-bottom: 0.2rem solid ${({ theme }) => theme.colors.blue};
      }
    `};
`;

export default Bold;
