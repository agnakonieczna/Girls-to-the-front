import styled from 'styled-components';
import Container from '../../components/common/Container';

// export const Caption = styled.p`
//   font-size: 1rem;
//   position: absolute;
//   transform: rotate(-45deg);
//   right: 0;
//   top: calc(100% - 3.5rem);

//   @media (min-width: 768px) {
//     right: 3rem;
//     top: 72%;
//   }

//   @media (min-width: 800px) {
//     right: 4rem;
//     top: 83%;
//   }
// `;

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
