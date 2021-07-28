import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 1.8rem;
  font-family: 'Monument Extended Bold';
  -webkit-text-stroke: 0.9px black;
  color: ${({ id, theme }) => (id % 2 === 0 ? theme.colors.pink : theme.colors.blue)};
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    line-height: 3.5rem;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 2rem;
  line-height: 30px;
  -webkit-text-stroke: 0.65px black;
  color: ${({ id, theme }) => (id % 2 === 0 ? theme.colors.blue : theme.colors.pink)};

  @media (min-width: 768px) {
    width: ${({ width }) => width};
    line-height: 35px;
    margin-bottom: ${({ margin }) => margin && '3rem'};
    -webkit-text-stroke: 0.9px black;
  }
`;

export const Item = styled.li`
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: ${({ id }) => (id % 2 === 0 ? 'row-reverse' : 'row')};
    align-items: center;
    margin-bottom: 13rem;
  }
`;

export const Description = styled.div`
  @media (min-width: 768px) {
    width: 56%;
  }
`;
