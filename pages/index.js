import styled from 'styled-components';
import Image from 'next/image';
import { createClient } from 'contentful';
import EventsList from '../components/home-page/EventsList';
import Container from '../components/common/Container';
import StyledBlueCircle from '../components/common/BlueCircle';
import StyledRedCircle from '../components/common/RedCircle';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const resp = await client.getEntries({ content_type: 'event', 'fields.language': 'PL' });

  return {
    props: {
      eventsPL: resp.items,
    },
    revalidate: 60,
  };
}

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomePage = ({ eventsPL }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src='/images/hero-image.png' width={509} height={517} />
      </ImageWrapper>
      <EventsList eventsPL={eventsPL} />
      <StyledRedCircle top='0' left='-50%' toptablet='-50px' lefttablet='-50%'/>
      <StyledBlueCircle top='400px' right='-40%' toptablet='125px' righttablet='-60%'/>
      <StyledRedCircle top='800px' left='-50%' lefttablet='-40%' />
      <StyledBlueCircle top= '1500px' right='-50%' toptablet='950px' />
    </Container>
  );
};

export default HomePage;
