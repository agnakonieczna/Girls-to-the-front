import Container from '../components/common/Container';
import Intro from '../components/zines-page/Intro/Intro';
import ZineList from '../components/zines-page/ZineList/ZineList';
import ScrollToTop from '../components/common/ScrollToTop';
import { createClient } from 'contentful';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  });

  const zinesPL = await client.getEntries({ content_type: 'zine', 'fields.language': 'PL' });
  const zinesEN = await client.getEntries({ content_type: 'zine', 'fields.language': 'EN' });

  return {
    props: { zinesPL: zinesPL.items, zinesEN: zinesEN.items }
  };
}

const Zines = ({ zinesPL, zinesEN }) => {
  return (
    <Container>
      <Intro />
      <ZineList zinesPL={zinesPL} zinesEN={zinesEN} />
      <ScrollToTop />
    </Container>
  );
};

export default Zines;
