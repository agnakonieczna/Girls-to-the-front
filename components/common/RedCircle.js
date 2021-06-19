import styled from 'styled-components';

const StyledRedCircle = styled.div`
  width: 424px;
  height: 424px;
  position: absolute;
  top: ${({ top }) => top && top};
  left: ${({ left }) => left && left};
  bottom: ${({ bottom }) => bottom && bottom};
  right: ${({ right }) => right && right};
  z-index: -1;

  @media (min-width: 768px) {
    width: 924px;
    height: 924px;
    top: ${({ toptablet }) => toptablet && toptablet};
    left: ${({ lefttablet }) => lefttablet && lefttablet};
  }
`;


const RedCircle = ({...props}) => {
  return (
    <StyledRedCircle {...props}>
      <img src='/images/red-circle.svg' />
    </StyledRedCircle>
  );
};

export default RedCircle;
