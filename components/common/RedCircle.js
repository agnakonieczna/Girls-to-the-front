import styled from 'styled-components';
import circle from '../../public/images/red-circle.png';

const StyledRedCircle = styled.div`
  width: 924px;
  height: 924px;
  position: absolute;
  top: ${({ top }) => top && top};
  left: ${({ left }) => left && left};
  bottom: ${({ bottom }) => bottom && bottom};
  right: ${({ right }) => right && right};
  z-index: -1;

  @media (min-width: 768px) {
    top: ${({ toptablet }) => toptablet && toptablet};
    left: ${({ lefttablet }) => lefttablet && lefttablet};
  }
`;

const RedCircle = ({ ...props }) => {
  return (
    <StyledRedCircle {...props}>
      <img src={circle} alt='' />
    </StyledRedCircle>
  );
};

export default RedCircle;
