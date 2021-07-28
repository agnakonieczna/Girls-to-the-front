import { SlideWrapper } from './Slide.style';

const SlideItem = ({ img, alt }) => {
  return (
    <SlideWrapper>
      <img src={img} alt={alt} />
    </SlideWrapper>
  );
};

export default SlideItem;
