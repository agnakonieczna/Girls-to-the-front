import styled from 'styled-components';

export const StyledSocialMediaIcons = styled.div`
  display: flex;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%) translateY(${({ menuOpen }) => (menuOpen ? '0' : '100%')});
  opacity: ${({ menuOpen }) => (menuOpen ? '1' : '0')};
  transition: transform 0.25s ease-in-out 0.25s, opacity 0.25s ease-in-out 0.2s;

  @media (min-width: 768px) {
    align-items: center;
    position: unset;
    transform: unset;
    opacity: 1;
    transition: unset;
  }
`;

export const LangBtn = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 700;
  padding: 1rem;
  cursor: pointer;
  z-index: 2;

  @media (min-width: 1024px) {
    margin-right: 1.5rem;
  }
`;
