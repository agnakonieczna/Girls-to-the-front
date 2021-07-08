import styled from 'styled-components';

export const TeamImagesWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  div:first-child {
    align-self: flex-start;
  }

  div:nth-child(2) {
    @media (min-width: 768px) {
      margin-bottom: 2rem;
    }
  }

  div:last-child {
    align-self: center;
  }

  @media (min-width: 768px) {
    width: 57%;
  }
`;
