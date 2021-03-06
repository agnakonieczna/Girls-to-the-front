import styled from 'styled-components';

export const EventTitle = styled.h2`
  font-family: 'Monument Extended Bold';
  margin: 4rem 0 3rem;
  line-height: 35px;
  -webkit-text-stroke: 1px black;
  color: ${({ theme }) => theme.colors.marine};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;

  @media (min-width: 768px) {
    margin: 6rem 0 4rem;
  }
`;

export const EventDate = styled.p`
  margin-bottom: 3rem;
  color: #333333;
`;

export const TextParagraph = styled.p`
  margin-bottom: 2rem;
  line-height: 3rem;
  color: #333333;

  @media (min-width: 768px) {
    line-height: 3.5rem;
  }
`;

export const Arrow = styled.div`
  width: fit-content;
  cursor: pointer;

  svg {
    width: 20px;
    height: 50px;
    stroke: ${({ theme }) => theme.colors.black};
    stroke-width: 2px;
    transform: translate(1.5rem, 0) rotate(-90deg);

    @media (min-width: 768px) {
      width: 40px;
      height: 80px;
    }
  }
`;
