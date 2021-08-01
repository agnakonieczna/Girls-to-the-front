import styled from 'styled-components';
import Container from '../../components/common/Container';

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
