import Paragraph from '../components/common/Paragraph';
import Bold from '../components/common/Bold';
import Italic from '../components/common/Italic';
import List from '../components/common/List';
import ArtistsWrapper from '../components/common/ArtistWrapper';
import Link from 'next/link';

const aboutMain = {
  PL: {
    first: (
      <Paragraph width='38%'>
        <Bold>
          Girls to the Front to inicjatywa Agaty Wnuk i Oli Kamińskiej, działająca w Warszawie od
          2015 roku.
        </Bold>{' '}
        Jako GTTF organizujemy koncerty <Bold>dziewczyn, kobiet</Bold> i <Bold>osób queer</Bold> z
        Polski i zagranicy, imprezy, performansy, dyskusje i warsztaty, gramy DJ sety i wydajemy{' '}
        <Bold>
          <Link href='/zines'>feministyczno-queerowego zina</Link>
        </Bold>
        . Od 2019 roku prowadzimy także autorską <Link href='/radio'>audycję w Radiu Kapitał</Link>.
      </Paragraph>
    ),
    second: (
      <Paragraph margin>
        Swoją działalność rozpoczęłyśmy z zajawki dziewczynami w muzyce:{' '}
        <Bold>
          chciałyśmy, żeby więcej dziewczyn miało szansę zaprezentować swoją twórczość, zależało
          nam, aby wspierać debiuty i zapraszać inspirujące artystki, kiedy Polsce brakowało
          podobnych inicjatyw
        </Bold>
        . Wkrótce sytuacja polityczna w naszym kraju tylko potwierdziła, że istnieje potrzeba
        bezpiecznej przestrzeni dla <Bold>dziewczyn i osób queer</Bold>, w której będą mogły dzielić
        się swoją twórczością i wyrażać opinie bez przerywających im cis-mężczyzn.{' '}
      </Paragraph>
    ),
    three: (
      <Paragraph blue noMargin>
        Przy zakładaniu Girls to the Front inspirowałyśmy się punkowo-feministycznym ruchem Riot
        Grrrls, który rozwinął się w latach 90. w Stanach Zjednoczonych. Początkowo swoje działania
        kierowałyśmy przede wszystkim do osób, które identyfikują się jako dziewczyny.{' '}
        <Bold>
          Wraz z rozwojem GTTF, skierowałyśmy naszą inicjatywę również do osób niebinarnych, trans i
          queer. Chociaż pozostałyśmy przy nazwie Girls to the Front, staramy się wzmocnić głosy nie
          tylko dziewczyn, ale również osób queer.
        </Bold>
      </Paragraph>
    ),
    four: (
      <Paragraph pink width='65%'>
        Głównym celem Girls to the Front jest{' '}
        <Bold>budowa społeczności dziewczyn i kobiet, osób niebinarnych, trans i queer</Bold> –
        dostępnej, inspirującej i wspierającej, w której każdy głos jest tak samo ważny.
      </Paragraph>
    ),
    five: (
      <Paragraph margin blue>
        W GTTF większością spraw zajmujemy się we dwójkę: wspólnie organizujemy wydarzenia,
        prowadzimy warsztaty, jesteśmy redaktorkami zina. Jednak ogromnie ważne jest dla nas{' '}
        <Bold>wsparcie, które otrzymujemy od przyjaciółek i koleżanek</Bold>, które stale z nami
        działają, pomagają nam zarówno z wydarzeniami jak i z wydawaniem zina.
      </Paragraph>
    ),
    six: (
      <Paragraph pink width='40%'>
        Częścią GTTF team jest graficzka <Bold>Magdalena Rzepecka</Bold>, absolwentka krakowskiej
        ASP, która zajmuje się komiksem i ilustracją i współtworzy polskiego komiksowego zina ciut.
        To ona obecnie pomaga nam z prawie każdym graficznym wyzwaniem. Od strony graficznej działa
        z nami także <Bold>Maja Demska</Bold>, artystka i kuratorka, która cierpliwie pracowała przy
        wielu numerach i której zawdzięczamy wygląd naszego zina. W każdym z naszych działań - od
        organizacji wydarzeń po nawet najmniejszy problem - wspiera nas <Bold>Kasia Szenajch</Bold>{' '}
        aka dj peploid V. Ogromne podziękowania należą się też dziewczynom, które składały
        poprzednie numery naszego zina (Magdalena Siemieniako, Kaja Kusztra, Paulina Ufnal) i
        tłumaczkom. Bez nich GTTF wyglądałoby zupełnie inaczej.
      </Paragraph>
    ),
    seven: (
      <Paragraph blue>
        <Bold>➽ Zorganizowałyśmy ponad 30 koncertów i imprez. Dotychczas gościłyśmy: </Bold>
      </Paragraph>
    ),
    eight: (
      <Paragraph pink width='95%'>
        ➽ Jako <Bold>DJki występowałyśmy</Bold> między innymi na MFF Nowe Horyzonty (Wrocław), na
        otwarciu festiwalu filmowego Her Docs (Warszawa), licznych benefitach i imprezach. Niektóre
        z naszych DJ setów można również usłyszeć w naszej{' '}
        <Link href='/radio'>audycji w Radiu Kapitał.</Link>
      </Paragraph>
    ),
    nine: (
      <Paragraph blue width='50%'>
        ➽ Wydałyśmy ponad 10 <Link href='/zines'>zinów</Link>:{' '}
        <Italic>
          Dziewczyny w muzyce (2015), Stay strong! (2016), Ciało (2016), Relacje między dziewczynami
          (2017), Seks (2017), Obcość (2017), All Queers to the Front (2018), Choroba i
          niepełnosprawność (2019), Przyszłość / Future (2019), Queer Erotica Zine (2020)
        </Italic>
        , ziny powstałe podczas warsztatów. Nasze ziny są do kupienia na{' '}
        <a
          href='https://allegro.pl/uzytkownik/gttfpl?bmatch=cl-e2101-d3794-c3683-uni-1-5-0429'
          target='_blank'
          rel='noopener noreferrer'
        >
          Allegro
        </a>
        ,{' '}
        <a
          href='https://www.etsy.com/shop/GirlstotheFrontPL'
          target='_blank'
          rel='noopener noreferrer'
        >
          Etsy
        </a>{' '}
        i w wybranych księgarniach.
      </Paragraph>
    ),
    ten: (
      <Paragraph pink width='68%'>
        ➽ <Bold>Prowadziłyśmy liczne warsztaty i wykłady</Bold>, między innymi w Krakowie (festiwal
        Unsound, galeria Nośna), Wrocławiu (regime), Częstochowie (literacki Festiwal Dekonstrukcji
        Słowa Czytaj!) i online (dla Лезо zine). Nasze ziny można było oglądać m.in. w BWA Wrocław i
        Barnard Zine Library (Nowy Jork).
      </Paragraph>
    ),
    eleven: (
      <List>
        <li>
          <Paragraph blue>
            ➽ Od lipca 2019 prowadzimy audycję w Radiu Kapitał, w której m.in. rozmawiamy z
            gościnami, dzielimy się ulubionymi piosenkami i czytamy fragmenty zinów.
          </Paragraph>
        </li>
        <li>
          <Paragraph pink>
            ➽ Swoimi działaniami wspierałyśmy m.in. kampanię “TAK! to miłość” Amnesty International.
          </Paragraph>
        </li>
        <li>
          <Paragraph blue>
            ➽ Razem z Trzema Szóstkami przygotowałyśmy przegląd dziewczyńskiego niezalu (
            <a href='/'>Youtube</a>, 2019).
          </Paragraph>
        </li>
      </List>
    ),
    twelve: (
      <Paragraph pink margin>
        <Bold>Media o GTTF - wybrane rozmowy i artykuły:</Bold>
      </Paragraph>
    ),
    thirteen: (
      <Paragraph pink margin>
        Jako GTTF pojawiłyśmy się też m.in. w{' '}
        <Bold>
          Radiu Żak, Off Radio Kraków, Radiu Luz, G’rls Room, Dziennik Gazeta Prawna, Lula Pink,
          Szajn – dziewczyński magazyn online
        </Bold>
        .
      </Paragraph>
    ),
  },
  EN: {
    first: (
      <Paragraph width='38%'>
        <Bold>
          Girls to the Front is an initiative based in Warsaw, Poland, founded by Agata Wnuk and Ola
          Kamińska in 2015.
        </Bold>{' '}
        As GTTF, we organize concerts of <Bold>girls, women, and queer</Bold> musicians from Poland
        and abroad, parties, performances, panel discussions, play DJ sets, and publish our{' '}
        <Link href='/zines'>feminist-queer zine</Link>. Since 2019, we have been hosting our show at{' '}
        <Link href='/radio'>Radio Kapitał</Link> community radio.
      </Paragraph>
    ),
    second: (
      <Paragraph margin>
        Our initiative started with our shared passion for girls in music:{' '}
        <Bold>
          we wanted to see more girls and women being active on Warsaw’s music scene, support
          debuts, and book inspiring artists, when Poland lacked such initiatives.
        </Bold>{' '}
        Soon, our country’s political situation only confirmed the need for a safe space for{' '}
        <Bold>girls, trans, non-binary, and intersex people</Bold>, where they can share their art
        and music and express themselves without cis men interrupting them.
      </Paragraph>
    ),
    three: (
      <Paragraph blue>
        When founding Girls to the Front, we got inspired by Riot Grrrls’ punk-feminist movement
        that emerged in the U.S. in the ’90s. In the beginning, we targeted our activity mainly at
        anyone who identified as a girl.
        <Bold>
          With time and GTTF growth, we have committed to ensuring that non-binary, trans, and
          intersex people can also feel included in our initiative. While we kept the name Girls to
          the Front, we aim to create space not only for female but also queer voices.
        </Bold>
      </Paragraph>
    ),
    four: (
      <Paragraph pink width='65%'>
        The main goal of Girls to the Front is to build a{' '}
        <Bold>community of girls, women, non-binary, trans, and queer people</Bold> - one that is
        accessible, inspiring, and supportive, one in which all voices are equally important.
      </Paragraph>
    ),
    five: (
      <Paragraph margin blue>
        At Girls to the Front, it’s the two of us that do most stuff: we organize events together,
        we conduct workshops, we are the editors of the zine.{' '}
        <Bold>
          But we wouldn’t be able to publish the zine and organize the events without help from our
          wonderful friends!
        </Bold>
      </Paragraph>
    ),
    six: (
      <ArtistsWrapper width='40%'>
        <Paragraph pink margin>
          <Bold>Magda Rzepecka</Bold> is a vital member of the GTTF team. An illustrator fascinated
          by comics, Magda graduated from The Academy of Fine Arts in Kraków and is a ciut zine
          co-editor. She’s the one who currently helps us with every problem concerning graphics
          (thank you!!!).
        </Paragraph>
        <Paragraph pink margin>
          Artist and curator <Bold>Maja Demska</Bold> have been patiently helping us with the zine
          and workshops too. It’s because of Maja that our zines look the way they do!
        </Paragraph>
        <Paragraph pink margin>
          <Bold>Kasia Szenajch</Bold> aka DJ peploid V has supported us from the very beginning and
          helps us in more ways we can count.
        </Paragraph>
        <Paragraph pink>
          We’re also incredibly grateful to all girls and women who helped with the design and
          typesetting of our zines’ previous issues (Magdalena Siemieniako, Kaja Kusztra, Paulina
          Ufnal), as well as our translators. Without them, our zines and events would look
          completely different.
        </Paragraph>
      </ArtistsWrapper>
    ),
    seven: (
      <Paragraph blue>
        <Bold>➽ So far, we have organized over 30 events and hosted over 50 artists:</Bold>
      </Paragraph>
    ),
    eight: (
      <Paragraph pink width='95%'>
        ➽ <Bold>As DJs, we performed</Bold> at the International Film Festival Nowe Horyzonty
        (Wrocław), on the opening night of Her Docs festival (Warszawa) and at numerous parties and
        benefits for feminist initiatives. You can listen to some of our sets in our radio show at{' '}
        <Link href='/radio'>Radio Kapitał.</Link>
      </Paragraph>
    ),
    nine: (
      <Paragraph blue width='50%'>
        ➽ We have published over ten <Link href='/zines'>zines</Link>:{' '}
        <Italic>
          Dziewczyny w muzyce [Girls in Music] (2015); Stay strong! (2016); Ciało [Body] (2016);
          Relacje między dziewczynami [Relationships between women] (2017); Seks [Sex] (2017);
          Obcość [Otherness] (2017); All Queers to the Front (2018); Choroba i niepełnosprawność
          [Disability and illness] (2019); Przyszłość / Future (2019); Queer Erotica Zine (2020);
        </Italic>
        , ziny powstałe podczas warsztatów. Nasze ziny są do kupienia na Allegro, Etsy i w wybranych
        księgarniach.
      </Paragraph>
    ),
    ten: (
      <Paragraph pink width='68%'>
        ➽ We have conducted <Bold>numerous workshops and lectures</Bold>: at Unsound festival
        (Kraków), Nośna gallery (Kraków), during book festival Czytaj! (Częstochowa), with regime
        (Wrocław), online for Лезо zine, and others. Our zines were exhibited, among others, at
        Barnard Zine Library (NYC) and BWA Wrocław gallery.
      </Paragraph>
    ),
    eleven: (
      <List>
        <li>
          <Paragraph blue>
            ➽ Since 2019, we have our radio show at Radio Kapitał community radio.
          </Paragraph>
        </li>
        <li>
          <Paragraph pink>
            ➽ We supported, among others, “TAK! to miłość” campaing by Amnesty International.
          </Paragraph>
        </li>
        <li>
          <Paragraph blue>
            ➽ Together with Trzy Szóstki, we created a selection of girls’ independent music
            (Youtube, 2019){' '}
          </Paragraph>
        </li>
      </List>
    ),
    twelve: (
      <Paragraph pink margin>
        <Bold>GTTF in media - selected interviews and articles:</Bold>
      </Paragraph>
    ),
    thirteen: (
      <Paragraph pink margin>
        As GTTF, we have appeared also in numerous radio stations (including Radio Żak, Off Radio
        Kraków, Radio Luz), newspapers (G’rls Room, Dziennik Gazeta Prawna), and online magazines
        (Lula Pink, Szajn – dziewczyński magazyn online).
      </Paragraph>
    ),
  },
};

export default aboutMain;