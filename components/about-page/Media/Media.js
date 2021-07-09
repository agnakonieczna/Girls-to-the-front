import { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from '../../../context/LanguageContext';
//styles
import Container from '../../common/Container';
import RedCircle from '../../common/RedCircle';
import BlueCircle from '../../common/BlueCircle';
//data
import pageContent from '../../../data/about-main';
import mediaContent from '../../../data/about-media';
import textsContent from '../../../data/about-texts';

const MediaTitle = styled.h2`
  font-size: 4rem;
  font-family: 'Monument Extended Bold';
  color: ${({ theme }) => theme.colors.fuchsia};
  font-weight: 700;
  text-align: center;
  margin: 20rem 0 2rem;
  padding: 2rem;
  -webkit-text-stroke: 0.5px black;
  background-image: url('/images/media-background.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const MediaList = styled.ul`
  margin-bottom: 2rem;
`;

const Media = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <RedCircle top='100px' right='0' toptablet='0' />
      <BlueCircle top='1000px' left='-20%' toptablet='60%' />
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
