import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ZineListPL from './ZineListPL';
import ZineListEN from './ZinesListEN';
//styles
import RedCircle from '../common/RedCircle';

const Title = styled.h2`
  font-size: 2.5rem;
  font-family: 'Monument Extended Bold';
  color: transparent;
  font-weight: 700;
  text-align: center;
  margin: 3rem 0;
  padding: 5rem;
  -webkit-text-stroke: 0.5px black;

  @media (min-width: 768px) {
    padding: 9.5rem 0;
    font-size: 4rem;
    margin: 7.5rem 0 9rem;
  }
`;

const TitleBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 18rem;
  background-image: url('/images/zines-title-background.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media (min-width: 768px) {
    height: 37rem;
    background-position: top center;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
`;

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
