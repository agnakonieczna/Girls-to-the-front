import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import ZineListPL from '../ZineListPL';
import ZineListEN from '../ZinesListEN';
//styles
import RedCircle from '../../common/RedCircle';
import { Title, TitleBackground, TitleWrapper } from './ZineList.style';

const titleContainer = {
  start: { scale: 1 },
  pulse: {
    scale: 1.06,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'mirror',
      delay: 0.5
    },
  },
};

const ZineList = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <TitleWrapper>
        <TitleBackground variants={titleContainer} initial='start' animate='pulse'/>
        <Title>
          {language === 'PL' ? 'Dotychczas ukazały się' : 'So far, we have published'}:
        </Title>
      </TitleWrapper>
      {language === 'PL' ? <ZineListPL /> : <ZineListEN />}
      <RedCircle top='0' left='-50%' toptablet='0' />
    </>
  );
};

export default ZineList;
