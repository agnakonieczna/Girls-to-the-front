import styled from 'styled-components';
import Container from '../common/Container';

export const PageWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledLink = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-block;
  margin: 2rem auto;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.4rem solid ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  padding: 1rem;
  cursor: pointer;
`;
