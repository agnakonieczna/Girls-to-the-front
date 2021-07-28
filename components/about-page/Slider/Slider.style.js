import styled from 'styled-components';

export const Arrow = styled.button`
  display: none;

  @media (min-width: 625px) {
    display: block;
    border: none;
    background-color: transparent;
    position: absolute;
    right: ${({ type }) => type === 'next' && '5rem'};
    top: 50%;
    transform: translateY(-30px);
    left: ${({ type }) => type === 'prev' && '5rem'};
    z-index: 5;
    cursor: pointer;
  }

  svg {
    width: 60px;
    height: 100px;
    stroke: ${({ theme }) => theme.colors.pink};
    stroke-width: 2px;
    transform: ${({ type }) =>
      type === 'prev' ? 'translate(0, -50%) rotate(-90deg)' : 'translate(0, -50%) rotate(90deg)'};

    @media (min-width: 768px) {
      width: 100px;
      height: 180px;
    }
  }
`;

export const SwiperWrapper = styled.div`
  @media (min-width: 958px) {
    display: none;
  }
`;

export const BulletsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  span {
    background-color: ${({ theme }) => theme.colors.pink};
    margin: 0 0.5rem;
  }
`;

export const ImagesWrapper = styled.div`
  display: none;

  @media (min-width: 958px) {
    display: block;
  }
`;
