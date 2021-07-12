import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    height: 420px;
    width: 80%;
  }
`;

export const ZineImgWrapper = styled.div`
  @media (min-width: 768px) {
    position: relative;
    width: 50%;
    height: 350px;
    margin-left: 6rem;
  }
`;