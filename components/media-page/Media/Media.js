import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
//styles
import Container from '../../common/Container';
import RedCircle from '../../common/RedCircle';
import BlueCircle from '../../common/BlueCircle';
import { MediaTitle, MediaList, MediaTitleBackground } from './Media.style';
//data
import pageContent from '../../../data/about-main';
import mediaContent from '../../../data/about-media';
import textsContent from '../../../data/about-texts';


const titleContainer = {
  start: { scale: 1 },
  pulse: {
    scale: 1.05,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'mirror',
      delay: 0.5
    },
  },
};

const Media = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <RedCircle top='100px' right='0' toptablet='0' />
      <BlueCircle top='1000px' left='-20%' toptablet='60%' />
      <MediaTitleBackground variants={titleContainer} initial='start' animate='pulse'/>
      <MediaTitle>Media</MediaTitle>
      {pageContent[language].twelve}
      <MediaList>
        {mediaContent[language].map((element, index) => {
          return <li key={index + '89jsndjsue8'}>{element}</li>;
        })}
      </MediaList>
      {pageContent[language].thirteen}
      <ul>
        {textsContent[language].map((element, index) => (
          <li key={index + '9wiejdie938'}>{element}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Media;
