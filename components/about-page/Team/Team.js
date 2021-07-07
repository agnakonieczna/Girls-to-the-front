import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import Image from 'next/image';
//styles
import Container from '../../common/Container';
import RedCircle from '../../common/RedCircle';
import BlueCircle from '../../common/BlueCircle';
import Section from '../../common/Section';
import FlexWrapper from '../../common/FlexWrapper';
import ImageWrapper from '../../common/ImageWrapper';
import { TeamImagesWrapper } from './Team.style';
//data
import pageContent from '../../../data/about-main';
//assets
import demonstration from '../../../public/images/demonstration.png';
import magdalena from '../../../public/images/magdalena-rzepecka.png';
import maja from '../../../public/images/maja-demska.png';
import katarzyna from '../../../public/images/katarzyna-szenajch.png';

const Team = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <RedCircle top='-100px' right='-50%' toptablet='-400px' />
      <BlueCircle top='800px' left='0' />
      <Section>
        <FlexWrapper>
          <ImageWrapper>
            <Image src={demonstration} width={321} height={370} />
          </ImageWrapper>
          {pageContent[language].four}
        </FlexWrapper>
      </Section>
      <Section bigMargin>
        {pageContent[language].five}
        <FlexWrapper align='start'>
          {pageContent[language].six}
          <TeamImagesWrapper>
            <ImageWrapper>
              <Image src={magdalena} height={366} width={372} />
            </ImageWrapper>
            <ImageWrapper margin>
              <Image src={maja} height={326} width={353} />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={katarzyna} height={390} width={410} />
            </ImageWrapper>
          </TeamImagesWrapper>
        </FlexWrapper>
      </Section>
      <Section>{pageContent[language].seven}</Section>
    </Container>
  );
};

export default Team;
