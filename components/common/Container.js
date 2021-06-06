import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 1024px) {
    padding: 0;
    max-width: 958px;
  }
`;

export default Container;