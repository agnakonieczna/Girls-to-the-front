import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import Image from 'next/image';
//styles
import Container from '../common/Container';
import RedCircle from '../common/RedCircle';
import FlexWrapper from '../common/FlexWrapper';
import Section from '../common/Section';
import ImageWrapper from '../common/ImageWrapper';
//data
import pageContent from '../../data/about-main';
//assets
import photo from '../../public/images/ola-kaminska-and-agata-wnuk.png';

const GeneralInfo = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <RedCircle top='0' left='-50%' />
      <Section>
        <FlexWrapper align='start' top>
          {pageContent[language].first}
          <ImageWrapper>
            <Image src={photo} alt='Agata Wnuk i Ola Kamińska' width={532} height={612} />
          </ImageWrapper>
        </FlexWrapper>
        {pageContent[language].second}
      </Section>
    </Container>
  );
};

export default GeneralInfo;
