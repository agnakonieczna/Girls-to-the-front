import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import Section from '../../common/Section';
//styles
import { Rainbow, RainbowImage } from './RainbowSection.style';
//data
import pageContent from '../../../data/about-main';
//assets
import rainbow from '../../../public/images/rainbow.png';

const RainbowSection = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Section>
      <Rainbow>
        <RainbowImage top src={rainbow} alt='' />
        {pageContent[language].three}
        <RainbowImage bottom src={rainbow} alt='' />
      </Rainbow>
    </Section>
  );
};

export default RainbowSection;
