import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledMobileMenu = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: #fff;
`;

export const NavList = styled(motion.ul)`
  height: 80vh;
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;


export const SocialMediaIcons = styled(motion.div)`
  display: flex;
  position: absolute;
  bottom: 10%;
  left: 50%;

  @media (min-width: 1024px) {
    display: none;
  }
`;
