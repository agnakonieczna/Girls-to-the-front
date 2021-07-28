import styled from 'styled-components';

export const SlideWrapper = styled.div`
  width: 100%;
  height: 315px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: #000;

  @media (min-width: 768px) {
    padding: 0 5rem;
  }


  & > img {
    width: 100%;
    height: auto;
    object-fit: contain;
    max-height: 315px;
  }
`;