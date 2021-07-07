import styled from 'styled-components';

const ImageWrapper = styled.div`
  margin: 0 auto 2rem;
  width: fit-content;

  @media (min-width: 768px) {
    margin: 0 ${({ center }) => center && 'auto'};
    margin-bottom: ${({ margin }) => margin && '4rem'};
    align-self: ${({ align }) => align === 'end' && 'flex-end'};
    margin-right: ${({ marginRight }) => marginRight && '3rem'};
  }
`;

export default ImageWrapper;