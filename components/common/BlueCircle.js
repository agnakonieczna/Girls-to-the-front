import styled from 'styled-components';
import circle from '../../public/images/blue-circle.png';

const StyledBlueCircle = styled.div`
  width: 924px;
  height: 924px;
  position: absolute;
  top: ${({ top }) => top && top};
  left: ${({ left }) => left && left};
  bottom: ${({ bottom }) => bottom && bottom};
  right: ${({ right }) => right && right};
  z-index: -1;

  @media (min-width: 425px) {
    /* width: 924px;
    height: 924px; */
    top: ${({ toptablet }) => toptablet && toptablet};
    right: ${({ righttablet }) => righttablet && righttablet};
  }
`;

const BlueCircle = ({ ...props }) => {
  return (
    <StyledBlueCircle {...props}>
      <img src={circle} alt='' />
    </StyledBlueCircle>
  );
};

export default BlueCircle;
