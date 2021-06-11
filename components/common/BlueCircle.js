import styled from 'styled-components';
import BlueCircle  from '../../public/images/blue-circle.svg';

const StyledBlueCircle = styled(BlueCircle)`
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
    right: ${({ righttablet }) => righttablet && righttablet};
  }
`;

export default StyledBlueCircle;
