import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import styled from 'styled-components';
import Zine from './Zine';
//styles
import Paragraph from '../common/Paragraph';
import Bold from '../common/Bold';
import CustomImage from '../common/CustomImage';
//data
import zinesData from '../../data/zines-data';
//assets
import zine3 from '../../public/images/zine-3.png';
import zine4 from '../../public/images/zine-4.png';
import zine5 from '../../public/images/zine-5.png';
import zine6 from '../../public/images/zine-6.png';
import zine7 from '../../public/images/zine-7.png';
import zine8 from '../../public/images/zine-8.png';
import zine9 from '../../public/images/zine-9.png';
import zine10 from '../../public/images/zine-10.png';

const ZinesWrapper = styled.div`
  margin: 2rem 0;
  
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ZineListEN = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <ul>
        {zinesData[language].map((zine) => {
          return (
            <Zine
              key={zine.id + 'fjdkjf0909djskm '}
              id={zine.id}
              title={zine.title}
              description={zine.description}
              img={zine.img}
            />
          );
        })}
      </ul>
      {language === 'EN' && (
        <>
          <ul>
            <li>
              <Paragraph blue noMargin>
                <Bold>#8 Choroba, niepełnosprawność [Disability and illness] (2019) [PL only]</Bold>
              </Paragraph>
            </li>
            <li>
              <Paragraph pink noMargin>
                <Bold>#7 All Queers to the Front (2018) [PL only]</Bold>
              </Paragraph>
            </li>
            <li>
              <Paragraph blue noMargin>
                <Bold>#6 Obcość [Otherness] (2017) [PL only]</Bold>
              </Paragraph>
            </li>
            <li>
              <Paragraph pink noMargin>
                <Bold>#5 Seks [Sex] (2017) [PL only]</Bold>
              </Paragraph>
            </li>
            <li>
              <Paragraph blue noMargin>
                <Bold>
                  #4 Relacje między dziewczynami [Relationships between girls] (2017) [PL only]
                </Bold>
              </Paragraph>
            </li>
            <li>
              <Paragraph pink noMargin>
                <Bold>#3 Ciało [The Body] (2016) [PL only]</Bold>
              </Paragraph>
            </li>
            <li>
              <Paragraph blue noMargin>
                <Bold>#2 Stay strong! (2016) [PL only]</Bold>
              </Paragraph>
            </li>
            <li>
              <Paragraph pink noMargin>
                <Bold>#1 Dziewczyny w muzyce [Girls in music] (2015) [PL only]</Bold>
              </Paragraph>
            </li>
          </ul>
          <ZinesWrapper>
            <CustomImage src={zine3} width={177} height={250} marginBottom='2.5rem'/>
            <CustomImage src={zine4} width={177} height={250} marginBottom='2.5rem'/>
            <CustomImage src={zine5} width={177} height={250} marginBottom='2.5rem'/>
            <CustomImage src={zine6} width={177} height={250} marginBottom='2.5rem'/>
            <CustomImage src={zine7} width={177} height={250} marginBottom='2.5rem'/>
            <CustomImage src={zine8} width={177} height={250} marginBottom='2.5rem'/>
            <CustomImage src={zine9} width={177} height={250} marginBottom='2.5rem'/>
            <CustomImage src={zine10} width={177} height={250} marginBottom='2.5rem'/>
          </ZinesWrapper>
        </>
      )}
    </>
  );
};

export default ZineListEN;
