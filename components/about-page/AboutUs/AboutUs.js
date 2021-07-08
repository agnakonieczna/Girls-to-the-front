import { useContext } from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import { LanguageContext } from '../../../context/LanguageContext';
//styles
import Container from '../../common/Container';
import RedCircle from '../../common/RedCircle';
import BlueCircle from '../../common/BlueCircle';
import Section from '../../common/Section';
import FlexWrapper from '../../common/FlexWrapper';
import CustomImage from '../../common/CustomImage';
//assets
import workshop from '../../../public/images/workshop.png';
import girlsDjsOne from '../../../public/images/ola-kamińska-and-agata-wnuk-djs-1.png';
import girlsDjsTwo from '../../../public/images/ola-kamińska-and-agata-wnuk-djs-2.png';
import zinesOne from '../../../public/images/girls-with-zines.png';
import zinesTwo from '../../../public/images/zine-inside.png';
//data
import pageContent from '../../../data/about-main';

const Wrapper = styled.div`
  height: 420px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AboutUs = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <RedCircle top='0' right='-30%' toptablet='200px' />
      <BlueCircle top='600px' left='5%' toptablet='700px' />
      <BlueCircle top='2000px' left='40%' toptablet='1350px' />
      <Section>
        <FlexWrapper>
          <Wrapper>
            {pageContent[language].eight}
            <CustomImage align='end' marginRight src={girlsDjsTwo} alt='' width={347} height={232} />
          </Wrapper>
          <CustomImage width='20%' src={girlsDjsOne} alt='' width={279} height={420} />
        </FlexWrapper>
      </Section>
      <Section bigMargin>
        <FlexWrapper align='start'>
          {pageContent[language].nine}
        </FlexWrapper>
      </Section>
      <Section>
        <FlexWrapper>
          <CustomImage src={workshop} width={283} height={213} alt=''/>
          {pageContent[language].ten}
        </FlexWrapper>
      </Section>
    </Container>
  );
};

export default AboutUs;
