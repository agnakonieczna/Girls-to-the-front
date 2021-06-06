import styled from 'styled-components';
import Container from '../common/Container';

export const StyledHeader = styled(Container)`
  font-family: 'Monument Extended';
  font-size: 1.6rem;
  padding: 3rem 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    padding: 3rem 0;
  }
`;

// export const FlexWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
// `;

export const Logo = styled.p`
  font-family: 'Monument Extended Bold';
  color: #000;
  text-decoration: none;
  margin-right: 0.65rem;
  padding: 1rem 0;
  z-index: 2;
  font-size: 1.6rem;
  cursor: pointer;

  &:focus {
    text-decoration: none;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;

  & li:last-child {
    margin-right: 0;
  }
`;

export const SocialMediaIcons = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const MobileWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;
