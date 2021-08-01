import styled from 'styled-components';
import { motion } from 'framer-motion';

export const EventWrapper = styled(motion.div)`
  max-width: 965px;
  height: auto;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 1px 12px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  margin: 10rem auto;
  cursor: pointer;

  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const EventContentWrapper = styled.div`
  padding: 2rem;
  width: 100%;

  @media (min-width: 425px) {
    padding: 5rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem 7rem 3rem 5rem;
    width: 55%;
  }
`;

export const EventTitle = styled.h2`
  font-family: 'Monument Extended';
  text-transform: uppercase;
  margin: 0.5rem 0;
`;

export const EventText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.marine};
  line-height: 2rem;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EventDate = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.marine};
`;

export const EventButton = styled.button`
  font-size: 1.2rem;
  text-decoration: 'none';
  font-weight: 700;
  cursor: pointer;
  border: none;
  background-color: transparent;

  a {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Image = styled.img`
  width: auto;
  height: 100%;
  max-height: 25rem;
  object-fit: cover;

  @media (min-width: 1024px) {
    width: 45%;
    height: auto;
    object-fit: cover;
  }
`;
