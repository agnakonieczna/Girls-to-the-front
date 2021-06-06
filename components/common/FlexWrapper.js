import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({justify}) => justify};
`;

export default FlexWrapper;
