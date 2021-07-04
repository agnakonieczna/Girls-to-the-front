import { Fragment, useContext } from 'react';
import Container from '../../components/common/Container';
import BlueCircle from '../../components/common/BlueCircle';
import RedCircle from '../../components/common/RedCircle';
import { LanguageContext } from '../../context/LanguageContext';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
//styles
import { FlexWrapper, TextWrapper, ImageWrapper } from './RadioInfo.style';
//data
import radioContent from '../../data/radio-page';

const radioImage = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4,
    },
  },
};

const RadioInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <FlexWrapper>
        <TextWrapper>{radioContent[language].first}</TextWrapper>
        <ImageWrapper
          variants={radioImage}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          ref={ref}
        >
          <Image src='/images/radio.png' alt='Radio kapitał' width={428} height={360} />
        </ImageWrapper>
      </FlexWrapper>
      {radioContent[language].second.map((paragraph, index) => (
        <Fragment key={index + '98uiushywg'}>{paragraph}</Fragment>
      ))}
      <RedCircle top='-30%' right='-60%' />
      <BlueCircle top='20%' right='-70%' />
      <RedCircle top='10%' left='-70%' />
    </Container>
  );
};

export default RadioInfo;
