import styled from 'styled-components';

export const StyledHamburger = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  z-index: 2;
  padding: 1.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const InnerHamburger = styled.div`
  position: relative;
  height: 0.2rem;
  width: 2rem;
  background-color: ${({ theme, menuOpen }) =>
    menuOpen ? 'transparent' : theme.colors.black};
  transition: background-color 0.25s ease-in;

  &::before,
  ::after {
    content: '';
    position: absolute;
    left: 0;
    width: 2rem;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.black};
    transition: transform 0.25s ease-in-out;
  }

  &::before {
    top: -6px;
    transform: translateY(${({ menuOpen }) => (menuOpen ? '6px' : '0')})
      rotate(${({ menuOpen }) => (menuOpen ? '45deg' : '0')});
  }

  &::after {
    top: 6px;
    transform: translateY(${({ menuOpen }) => (menuOpen ? '-6px' : '0')})
      rotate(${({ menuOpen }) => (menuOpen ? '-45deg' : '0')});
  }
`;