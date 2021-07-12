import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import Section from '../../common/Section';
//styles
import { Rainbow, RainbowImage, RainbowBackground } from './RainbowSection.style';
//data
import pageContent from '../../../data/about-main';
//assets
import rainbow from '../../../public/images/rainbow.png';

const rainbowContainer = {
  start: { scale: 1 },
  pulse: {
    scale: 1.06,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'mirror'
    },
  },
};

const RainbowSection = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Section>
      <RainbowBackground variants={rainbowContainer} initial='start' animate='pulse'/>
      <Rainbow >
        <RainbowImage top src={rainbow} alt='' />
        {pageContent[language].three}
        <RainbowImage bottom src={rainbow} alt='' />
      </Rainbow>
    </Section>
  );
};

export default RainbowSection;
