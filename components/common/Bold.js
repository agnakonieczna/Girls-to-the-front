import styled from 'styled-components';

const Bold = styled.span`
  font-weight: 700;

  > a {
    color: ${({ theme }) => theme.colors.marine};
    -webkit-text-stroke: 0.9px black;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.marine};
    cursor: pointer;
  }
`;

export default Bold;
