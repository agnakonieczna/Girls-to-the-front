import { ImageWrapper, Caption } from './HeroImage.style';
import Image from 'next/image';

const mainImage = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1
    }
  }
};

const HeroImage = () => {
  return (
    <ImageWrapper variants={mainImage} initial='hidden' animate='show'>
      <Image src='/images/hero-image.png' width={509} height={517} />
      <Caption>Ilustracja: Oasis of Hate</Caption>
    </ImageWrapper>
  );
};

export default HeroImage;