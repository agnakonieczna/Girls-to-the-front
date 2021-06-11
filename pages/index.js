import styled from 'styled-components';
import Image from 'next/image';
import { createClient } from 'contentful';
import EventsList from '../components/home-page/EventsList';
import Container from '../components/common/Container';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const resp = await client.getEntries({ content_type: 'event' });

  return {
    props: {
      events: resp.items,
    },
    revalidate: 60,
  };
}

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomePage = ({ events }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src='/images/hero-image.png' width={509} height={517} />
      </ImageWrapper>
      <EventsList events={events} />
    </Container>
  );
};

export default HomePage;
