import styled from 'styled-components';

export const Rainbow = styled.div`
  position: relative;
  background-image: url('/images/rainbow-background.svg');
  background-repeat: no-repeat;
  background-position: center;
  padding: 9rem 3.5rem;
  margin: 4.5rem auto 0;

  @media (min-width: 768px) {
    padding: 8rem 0;
    background-size: contain;
    max-width: 958px;
  }

  @media (min-width: 1024px) {
    background-size: 87% auto;
  }

  & > p {
    @media (min-width: 768px) {
      padding: 0 10rem;
    }
  }
`;

export const RainbowImage = styled.img`
  width: 50px;
  position: absolute;
  top: ${({ top }) => top && '2rem'};
  left: ${({ top }) => top && '0.5rem'};
  bottom: ${({ bottom }) => bottom && '2rem'};
  right: ${({ bottom }) => bottom && '0.5rem'};
  transform: ${({ bottom }) => bottom && 'rotate(-180deg)'};

  @media (min-width: 768px) {
    width: 90px;
    left: ${({ top }) => top && '1.5rem'};
    right: ${({ bottom }) => bottom && '1.5rem'};
  }

  @media (min-width: 1024px) {
    left: ${({ top }) => top && '0'};
    right: ${({ bottom }) => bottom && '0'};
  }
`;
