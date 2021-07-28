import styled from 'styled-components';
import { useContext, Fragment } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import Image from 'next/image';
//styles
import CustomImage from '../../common/CustomImage';
import FlexWrapper from '../../common/FlexWrapper';
import ImageWrapper from '../../common/ImageWrapper';
import { ImagesWrapper } from './Intro.style';
//data
import pageContent from '../../../data/zines-intro';
//assets
import zines from '../../../public/images/zines.png';
import zineOne from '../../../public/images/zine-inside-1.png';
import zineTwo from '../../../public/images/zine-inside-2.png';
import zineThree from '../../../public/images/zine-inside-3.png';

const ZineIntro = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <FlexWrapper bottom>
        <ImageWrapper
          marginRight
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1, duration: 0.5 } }}
        >
          <Image
            src={zines}
            width={548}
            height={504}
            alt='G*TTF zines laying on the floor'
            priority={true}
          />
        </ImageWrapper>
        {pageContent[language].first}
      </FlexWrapper>
      {pageContent[language].second.map((paragraph, index) => (
        <Fragment key={index + 'ido938wjdnwu'}>{paragraph}</Fragment>
      ))}
      <FlexWrapper align='start'>
        {pageContent[language].third}
        <ImagesWrapper>
          <CustomImage
            src={zineOne}
            alt='Two pages from G*TTFxUNSOUND zine'
            width={318}
            height={212}
            marginBottom='2rem'
          />
          <CustomImage
            src={zineTwo}
            alt='Two pages from G*TTF#8 zine'
            width={318}
            height={212}
            marginBottom='2rem'
          />
          <CustomImage
            src={zineThree}
            alt='Two pages from G*TTF#9: Future zine'
            width={316}
            height={211}
            marginBottom='2rem'
          />
        </ImagesWrapper>
      </FlexWrapper>
    </>
  );
};

export default ZineIntro;
