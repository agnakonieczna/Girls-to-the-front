import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import styled from 'styled-components';
import Zine from './Zine';
import ZineListPL from './ZineListPL';
import ZineListEN from './ZinesListEN';
//styles
import RedCircle from '../common/RedCircle';
import BlueCircle from '../common/BlueCircle';
import Paragraph from '../common/Paragraph';
import Bold from '../common/Bold';
//data
import zinesData from '../../data/zines-data';

const ZinesTitle = styled.h2`
  font-size: 2.5rem;
  font-family: 'Monument Extended Bold';
  color: transparent;
  font-weight: 700;
  text-align: center;
  margin: 5rem 0 7rem;
  padding: 5rem;
  -webkit-text-stroke: 0.5px black;
  background-image: url('/images/zines-title-background.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  @media (min-width: 768px) {
    padding: 9.5rem;
    font-size: 4rem;
    margin: 7.5rem 0 9rem;
  }
`;


const ZineList = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <ZinesTitle>
        {language === 'PL' ? 'Dotychczas ukazały się' : 'So far, we have published'}:
      </ZinesTitle>
      {language === 'PL' ? <ZineListPL /> : <ZineListEN />}
      <RedCircle top='0' left='-50%' toptablet='0' />
      <BlueCircle top='30%' left='-60%' toptablet='35%' />
    </>
  );
};

export default ZineList;
