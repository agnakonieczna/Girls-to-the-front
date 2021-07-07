import styled from 'styled-components';

const Section = styled.section`
  margin-top: ${({ bigMargin }) => (bigMargin ? '10rem' : '6rem')};
  display: ${({ flex }) => flex && 'flex'};
  justify-content: ${({ flex }) => flex && 'center'};
`;

export default Section;