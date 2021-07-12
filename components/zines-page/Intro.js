import styled from 'styled-components';
import { useContext, Fragment } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
//styles
import CustomImage from '../common/CustomImage';
import FlexWrapper from '../common/FlexWrapper';
//data
import pageContent from '../../data/zines-intro';
//assets
import zines from '../../public/images/zines.png';
import zineOne from '../../public/images/zine-inside-1.png';
import zineTwo from '../../public/images/zine-inside-2.png';
import zineThree from '../../public/images/zine-inside-3.png';

const ImagesWrapper = styled.div`
  @media (min-width: 768px) {
    width: 30%;
    margin-left: 4rem;
  }
`;

const ZineIntro = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <FlexWrapper bottom>
        <CustomImage src={zines} width={548} height={504} alt='' marginRight/>
        {pageContent[language].first}
      </FlexWrapper>
      {pageContent[language].second.map((paragraph, index) => (
        <Fragment key={index + 'ido938wjdnwu'}>{paragraph}</Fragment>
      ))}
      <FlexWrapper align='start'>
        {pageContent[language].third}
        <ImagesWrapper>
          <CustomImage src={zineOne} alt='' width={318} height={212} marginBottom='2rem' />
          <CustomImage src={zineTwo} alt='' width={318} height={212} marginBottom='2rem' />
          <CustomImage src={zineThree} alt='' width={316} height={211} marginBottom='2rem' />
        </ImagesWrapper>
      </FlexWrapper>
    </>
  );
};

export default ZineIntro;