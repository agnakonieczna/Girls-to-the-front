import Image from 'next/image';
import { useState } from 'react';
import ImageWrapper from './ImageWrapper';
import { useInView } from 'react-intersection-observer';

const image = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

const CustomImage = ({ src, alt, width, height, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [isReady, setIsReady] = useState(false);

  const onLoadHandler = (e) => {
    setIsReady(true);
    typeof onLoad === 'function' && onLoad(e);
  };

  return (
    <ImageWrapper
      variants={image}
      initial='hidden'
      animate={(isReady && inView) ? 'show' : 'hidden'}
      ref={ref}
      {...props}
    >
      <Image src={src} width={width} height={height} alt={alt} onLoad={onLoadHandler} />
    </ImageWrapper>
  );
};

export default CustomImage;
