//styles
import Container from '../../common/Container';
import Paragraph from '../../common/Paragraph';
import BlueCircle from '../../common/BlueCircle';
import { Wrapper, Background } from './Concerts.style';

const backgroundContainer = {
  start: { scale: 1 },
  pulse: {
    scale: 1.06,
    transition: {
      duration: 2,
      yoyo: Infinity,
    },
  },
};

const Concerts = () => {
  return (
    <Wrapper>
      <Background variants={backgroundContainer} initial='start' animate='pulse'/>
      <Container>
        <BlueCircle top='400px' left='-20%' toptablet='0' />
        <Paragraph pink margin>
          Ada Lizardziuk | agus | BIBI | bibimbobo | Bez i Nadzieja | Brednie | Cudowne Lata |
          Deadly Firend | Di Libe brent wi a nase Szmate | Dog Whistle | DMITRIEVNA (CZ) | Dubais
          (USA) | emoji face | Enchanted Huntress | ESLABRAVA (AR) | Fermented Girls | flamin’ hot
          cheetos | FOFELA (CZ) | Gang Śródmieście | Giungla (IT) | hania | Henrietta | HER SIDE |
          kalliope | LASS | Later NOw | Lavia Hart | Lustra | madikoptah | Mala Herba | Marta Kortan
          | Mary Orcher (RU) | Morgiana Hz | Mucha Ladaco | NANA | Natalia Fiedorczuk | Order of the
          Rainbow Girls | Pascale Project (CA) | The Pau | Paulinkiss | peploid V | pff | PÓŁSŁODKIE
          ŚCIERVVO | Razor Cunts (DE) | Rosa Vertov | Satin de Compostela | She Said Destroy! (IT) |
          SKY | Słońce w Niebieskim Lśni Krysztale | Sonia Pisze Piosenki | Sonia Wąsowska | stud1nt
          (USA) | SVET (UA) | Szkoda | dj takako | Tygrysice | uszko | Uzhok (RU) | WAiT |
          Waterflower (LV) | Wilcze Jagody | Vittuma | Xarah Dion (CA) | Yana | Young Majli
        </Paragraph>
      </Container>
    </Wrapper>
  );
};

export default Concerts;
