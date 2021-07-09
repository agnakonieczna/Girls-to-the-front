import styled, {css} from 'styled-components';

const Bold = styled.span`
  font-weight: 700;

  > a {
    color: ${({ theme }) => theme.colors.marine};
    -webkit-text-stroke: 0.9px black;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.marine};
    cursor: pointer;
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
