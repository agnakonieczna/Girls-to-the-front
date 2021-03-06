import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
//styles
import Container from '../../common/Container';
import RedCircle from '../../common/RedCircle';
import BlueCircle from '../../common/BlueCircle';
import Section from '../../common/Section';
import FlexWrapper from '../../common/FlexWrapper';
import CustomImage from '../../common/CustomImage';
import { Wrapper, ZineImgWrapper } from './AboutUs.style';
//assets
import workshop from '../../../public/images/workshop.png';
import girlsDjsOne from '../../../public/images/ola-kamińska-and-agata-wnuk-djs-1.png';
import girlsDjsTwo from '../../../public/images/ola-kamińska-and-agata-wnuk-djs-2.png';
import zinesOne from '../../../public/images/girls-with-zines.png';
import zinesTwo from '../../../public/images/zine-inside.png';
import poster from '../../../public/images/poster.png';
//data
import pageContent from '../../../data/about-main';

const AboutUs = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <Container>
        <RedCircle top='0' right='-30%' toptablet='200px' />
        <BlueCircle top='600px' left='5%' toptablet='700px' />
        <BlueCircle top='2000px' left='40%' toptablet='1350px' />
        <Section>
          <FlexWrapper>
            <Wrapper>
              {pageContent[language].eight}
              <CustomImage
                align='end'
                marginRight
                src={girlsDjsTwo}
                alt='Ola Kamińska and Agata Wnuk playing their dj set'
                width={347}
                height={232}
              />
            </Wrapper>
            <CustomImage width='20%' src={girlsDjsOne} alt='Ola Kamińska and Agata Wnuk playing their dj set' width={279} height={420} />
          </FlexWrapper>
        </Section>
        <Section bigMargin>
          <FlexWrapper align='start'>
            {pageContent[language].nine}
            <ZineImgWrapper>
              <CustomImage
                src={zinesOne}
                absolute
                alt='Ola Kamińska and Agata Wnuk with Queer Erotica Zin'
                width={282}
                height={184}
                top='0'
                left='0'
              />
              <CustomImage
                src={zinesTwo}
                absolute
                alt='The first page of G*TTF: Future zine'
                width={242}
                height={190}
                top='48%'
                left='35%'
              />
            </ZineImgWrapper>
          </FlexWrapper>
        </Section>
        <Section>
          <FlexWrapper align='start'>
            <CustomImage src={workshop} width={283} height={213} alt='Mini zines and materials for zine workshop' marginRight/>
            {pageContent[language].ten}
          </FlexWrapper>
        </Section>
      </Container>
      <Section flex>
        <FlexWrapper>
          <CustomImage src={poster} width={254} height={382} alt='Purple textile with slogan'/>
          {pageContent[language].eleven}
        </FlexWrapper>
      </Section>
    </>
  );
};

export default AboutUs;
