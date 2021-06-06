import styled from 'styled-components';

export const StyledMobileMenu = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #fff;
  transform: ${(props) => (props.menuOpen ? 'translateX(0)' : 'translateX(-100vw)')};
  transition: transform 0.25s ease-in-out;
`;

export const NavList = styled.ul`
  height: 80vh;
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%) translateY(${({ menuOpen }) => (menuOpen ? '0' : '100%')});
  opacity: ${({ menuOpen }) => (menuOpen ? '1' : '0')};
  transition: transform 0.25s ease-in-out 0.25s, opacity 0.25s ease-in-out 0.2s;
`;
