import styled from 'styled-components';

const FlexWrapper = styled.div`
  @media (min-width: 768px) {
    max-width: 958px;
    display: flex;
    align-items: ${({ align }) => (align === 'start' ? 'flex-start' : 'center')};
    justify-content: space-between;
    margin-top: ${({ top }) => top && '4rem'};
  }
`;

export default FlexWrapper;
