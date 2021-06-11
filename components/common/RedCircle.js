import styled from 'styled-components';
import RedCircle from '../../public/images/red-circle.svg';

const StyledRedCircle = styled(RedCircle)`
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

export default StyledRedCircle;