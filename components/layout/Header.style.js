import styled from 'styled-components';
import Container from '../common/Container';
import { motion } from 'framer-motion';

export const StyledHeader = styled(motion.header)`
  width: 100%;
  font-family: 'Monument Extended';
  font-size: 1.6rem;
  padding: 3rem 0;

  @media (min-width: 1024px) {
    padding: 3rem 0 5rem;
  }
`;

export const HeaderWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.p`
  font-family: 'Monument Extended Bold';
  color: #000;
  text-decoration: none;
  margin-right: 0.65rem;
  padding: 1rem 0;
  z-index: 2;
  font-size: 1.6rem;
  cursor: pointer;
  position: relative;

  &:focus {
    text-decoration: none;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 1024px) {
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

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;

export const MobileWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    display: none;
  }
`;


export const StyledSocialMediaIcons = styled.div`
  @media (min-width: 1024px) {
    align-items: center;
    position: unset;
    transform: unset;
    opacity: 1;
    transition: unset;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`
