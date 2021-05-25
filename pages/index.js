import styled from 'styled-components';
import StyledLink from '../components/StyledLink';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <Title>
      HomePage
      <StyledLink href='/about'>About</StyledLink>
    </Title>
  );
}
