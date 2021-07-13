import { Fragment, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
//styles
import Container from '../../components/common/Container';
import BlueCircle from '../../components/common/BlueCircle';
import RedCircle from '../../components/common/RedCircle';
import ImageWrapper from '../common/ImageWrapper';
import { FlexWrapper, TextWrapper } from './RadioInfo.style';
//data
import radioContent from '../../data/radio-page';
import Image from 'next/image';
//assetes
import photo from '../../public/images/radio.png';

const RadioInfo = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <FlexWrapper>
        <TextWrapper>{radioContent[language].first}</TextWrapper>
        <ImageWrapper marginLeft>
          <Image src={photo} alt='Radio kapitał' width={428} height={360} priority={true} />
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
