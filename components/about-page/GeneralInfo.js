import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
//styles
import Container from '../common/Container';
import RedCircle from '../common/RedCircle';
import FlexWrapper from '../common/FlexWrapper';
import Section from '../common/Section';
import ImageWrapper from '../common/ImageWrapper';
import Image from 'next/image';
//data
import pageContent from '../../data/about-main';
//assets
import photo from '../../public/images/ola-kamińska-and-agata-wnuk.png';

const GeneralInfo = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <RedCircle top='0' left='-50%' />
      <Section>
        <FlexWrapper align='start' top bottom>
          {pageContent[language].first}
          <ImageWrapper marginLeft initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1, duration: 0.5}}}>
            <Image
              src={photo}
              alt='Agata Wnuk and Ola Kamińska on stairs'
              width={532}
              height={612}
              priority={true}
            />
          </ImageWrapper>
        </FlexWrapper>
        {pageContent[language].second}
      </Section>
    </Container>
  );
};

export default GeneralInfo;
