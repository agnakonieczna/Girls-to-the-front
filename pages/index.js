import { createClient } from 'contentful';
import Image from '../components/home-page/HeroImage/HeroImage';
import EventsList from '../components/home-page/EventsList';
import ScrollToTop from '../components/common/ScrollToTop';
//styles
import Container from '../components/common/Container';
import BlueCircle from '../components/common/BlueCircle';
import RedCircle from '../components/common/RedCircle';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  });

  const resp = await client.getEntries({ content_type: 'event', 'fields.language': 'PL' });

  return {
    props: {
      eventsPL: resp.items
    },
    revalidate: 60
  };
}

const HomePage = ({ eventsPL }) => {
  return (
    <Container>
      <Image />
      <EventsList eventsPL={eventsPL} />
      <RedCircle top='-100px' left='-100%' toptablet='-50px' lefttablet='-50%' />
      <BlueCircle top='700px' right='-40%' toptablet='125px' righttablet='-60%' />
      <RedCircle top='1500px' left='-50%' toptablet='1000px' lefttablet='-40%' />
      <BlueCircle top='1900px' right='-50%' toptablet='950px' />
      <ScrollToTop />
    </Container>
  );
};

export default HomePage;
