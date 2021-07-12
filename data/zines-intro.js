import styled from 'styled-components';
import Paragraph from '../components/common/Paragraph';
import Bold from '../components/common/Bold';

const Wrapper = styled.div`
  @media (min-width: 768px) {
    width: 70%;
  }
`;

const zinesIntro = {
  PL: {
    first: (
      <Paragraph width='40%'>
        Od 2015 wydajemy <Bold>feministyczno-queerowego zina</Bold>, w którym znajdują się eseje,
        artykuły, wywiady (m.in. z Róisín Murphy czy Jessy Lanzą), opowiadania, wiersze, kartki z
        pamiętnika, komiksy, zdjęcia, kolaże, ilustracje i inne prace tworzone przez dziewczyny i
        osoby queerowe.
      </Paragraph>
    ),
    second: [
      <Paragraph margin>
        Dotychczas wydałyśmy ponad 10 zinów – 9 tradycyjnych numerów, jeden numer specjalny
        poświęcony queerowej erotyce i kilka zinów powstałych na warsztatach (m.in. GTTFxUNSOUND).
      </Paragraph>,
      <Paragraph margin>
        Zależało nam, żeby działalność GTTF mogła wyjść poza ramy koncertów i innych spotkań na
        żywo: żeby móc planować i tworzyć wspólnie również między naszymi wydarzeniami i żeby{' '}
        <Bold>
          zbudować przestrzeń dostępną dla tych osób, które chcą z nami działać, ale z różnych
          powodów nie mają możliwości uczestniczyć w organizowanych przez nas wydarzeniach.
        </Bold>{' '}
        Zin dał nam właśnie taką możliwość – dotychczas współtworzyły go z nami osoby m.in. ze
        Stanów Zjednoczonych, Wielkiej Brytanii, Rosji, Turcji, czy Niemiec, a gotowe ziny
        wysyłałyśmy zarówno do małych miasteczek w Polsce, jak i do ośrodków uniwersyteckich w
        Karolinie Północnej. Przyszłość / Future oraz Queer Erotica Zine są w całości dostępne po
        polsku i po angielsku. Wybrane numery naszych zinów można było kupić w różnych księgarniach:
        od warszawskiej księgarni artystycznej Bookoff po Dog Eared Books w San Francisco.{' '}
        <Bold>
          W organizowaniu wydarzeń skupiamy się na działaniach lokalnych, natomiast poprzez wydawane
          ziny budujemy międzynarodową społeczność.
        </Bold>
      </Paragraph>,
    ],
    third: (
      <Paragraph width='58%' margin>
        Podobnie jak przy organizacji wydarzeń pod szyldem GTTF, również w przypadku zina staramy
        się, żeby nadesłane prace pochodziły zarówno od osób, które dopiero debiutują, jak i tych,
        które na co dzień zajmujących się pisaniem, grafiką, czy komiksem. W naszych zinach znajdują
        się teksty i prace m.in. Sylwii Chutnik, Ambiki Thompson, Beaty Siemieniako, Natalki
        Suszczyńskiej, SIKSY, sebulca, Zofii Krawiec, Anny Krztoń, PUSSYMANTRY, Idy Dzik, Moniki
        Zaleskiej i wielu innych osób. Jeżeli nie masz jeszcze doświadczenia w pisaniu czy tworzeniu
        ilustracji, ale chcesz spróbować swoich sił – zachęcamy do współtworzenia z nami zina!
        Obecnie prace trafiające do zina wyłanianie są w otwartych naborach, które ogłaszamy w
        naszych mediach społecznościowych.
      </Paragraph>
    ),
  },
  EN: {
    first: (
      <Paragraph width='40%'>
        Since 2015, Girls to the Front is also the title of our <Bold>queer-feminist zine</Bold>. In
        our zines, we collect essays, articles, interviews (with Róisín Murphy and Jessy Lanza,
        among others), stories, poems, comics, photos, collages, illustrations, and other works
        created by women, girls, and queers.
      </Paragraph>
    ),
    second: [
      <Paragraph margin>
        So far, we have published over ten “regular” GTTF zines and several zines created during the
        workshops (including GTTFxUNSOUND).
      </Paragraph>,
      <Paragraph margin>
        Publishing zines gave us an opportunity to{' '}
        <Bold>
          create a space available for those who want to connect and express themselves outside of
          the events we host
        </Bold>{' '}
        and those who want to work with us but, for various reasons, cannot participate in the
        events.{' '}
        <Bold>
          When organizing the events, we focus primarily on the local communities, while through
          Girls to the Front zines, we aim to build an international community
        </Bold>
        . Our zines feature works created by people from numerous countries: the United States,
        Great Britain, Russia, Turkey, or Germany. We have sent the finished zin to both small towns
        in Poland and universities in North Carolina. Future and Queer Erotica Zine are fully
        available in both Polish and English. Selected zines can be bought in various bookstores:
        from Bookoff Art Bookstore in Warsaw to Dog Eared Books in San Francisco.
      </Paragraph>,
    ],
    third: (
      <Wrapper>
        <Paragraph margin>
          Similar to our events, with GTTF zines we indend to feature works created both by those
          who are just starting to write or create art, as well as from those who are already
          published artists and writers.
        </Paragraph>
        <br />
        <Paragraph margin>
          If you don't have experience in writing or creating illustrations yet, but you want to try
          - please send us your work! We announce open calls on our Instagram and Facebook pages.
        </Paragraph>{' '}
        <br />
        <Paragraph margin>
          <Bold>
            You can order our zines from <a href='/'>Etsy</a>.
          </Bold>
        </Paragraph>
      </Wrapper>
    ),
  },
};

export default zinesIntro;
