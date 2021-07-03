import styled from 'styled-components';
import Container from '../../components/common/Container';

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 2rem 0;

  @media (min-width: 768px) {
    width: 55%;
    margin: 0;
    margin-left: 2rem;
  }
`;

export const Caption = styled.p`
  font-size: 1rem;
  position: absolute;
  transform: rotate(-90deg);
  right: -5rem;
  bottom: 5rem;

  @media (min-width: 768px) {
    bottom: 10rem;
  }
`;

export const FlexWrapper = styled(Container)`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const TextWrapper = styled.div`
  @media (min-width: 768px) {
    width: 45%;
  }
`;
