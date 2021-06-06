import styled, { css } from 'styled-components';

export const NavListItem = styled.li`
  display: inline-block;
  margin: 0 0.5rem;
  position: relative;
  width: ${({ shop }) => shop && '9.5rem'};
  transition: visibility 0s opacity 0.3s;
  text-decoration: ${(props) => (props.active ? 'underline' : null)};

  ${({ shop }) =>
    shop &&
    css`
      &::after {
        content: '↓';
        width: 1.6rem;
        height: 1.6rem;
        position: absolute;
        top: 1rem;
        right: 0;
        color: #fff;
        background-color: #000;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}

  @media (min-width: 768px) {
    &:hover ul {
      visibility: visible;
      opacity: 1;
    }
  }

  @media (min-width: 1024px) {
    margin: 0 0.8rem;
  }
`;

export const ShopList = styled.ul`
  display: ${({ clicked }) => (clicked ? 'flex' : 'none')};
  position: absolute;
  text-transform: uppercase;
  left: 50%;
  transform: translateX(-50%);
  list-style: none;
  transition: 0.3s;
  padding: 0.5rem 0;
  z-index: 2;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: block;
    opacity: 0;
    visibility: hidden;
  }
`;

export const ShopListItem = styled.li`
  cursor: pointer;

  a {
    color: #000;
  }

  a:hover {
    color: #1654f2;
  }
`;

export const StoreLink = styled.a`
  &:focus {
    text-decoration: none;
  }
`;
