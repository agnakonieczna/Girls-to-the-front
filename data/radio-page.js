import Paragraph from '../components/common/Paragraph';
import Bold from '../components/common/Bold';

const radioContent = {
    PL: {
      first: [
        <Paragraph key={'jki930ioe03'}>
          <Bold>Od lipca 2019 możecie usłyszeć nas na antenie społecznościowego <a href='https://radiokapital.pl/'>Radia Kapitał.</a></Bold>
        </Paragraph>,
        <Paragraph key={'ejiebuw8372'}>
          Co 4 tygodnie rozmawiamy z gościniami, czytamy ziny, gramy i polecamy muzykę tworzoną przez
          kobiety i osoby queerowe.{' '}
        </Paragraph>,
      ],
      second: [
        <Paragraph>
          Dotychczas w audycji rozmawiałyśmy m.in. z pisarką i myślicielką Olgą Drendą, Joanną Subko z
          biurza Rzecznika Praw Obywatelskich, aktywistką Gosią Kot, Łucją Kudłą z Młodzieżowego
          Strakju Klimatycznego, Magdaleną Kuśką z PAH, a także zespołami Cudowne Lata, Di Libe brent
          wi a nase Szmate i Enchanted Hunters.{' '}
        </Paragraph>,
        <Paragraph>
          <Bold>
            Zapisane audycje znajdziecie na naszym <a href='/'>Mixcloudzie</a>.
          </Bold>
        </Paragraph>,
      ],
    },
    EN: {
      first: [
        <Paragraph>
          Since July 2019, we have been hosting our show at the Radio Kapitał community radio. Every
          four weeks, we talk with guests, read zines, and play and recommend music created by women
          and queer artists. Our interviews are in Polish only but check out our (and our guests’) DJ
          sets!
        </Paragraph>,
      ],
      second: [
        '',
        <Paragraph>
          <Bold>
            Archived episodes are available on our <a href='/'>Mixcloud</a>.
          </Bold>
        </Paragraph>,
      ],
    },
  };

  export default radioContent;