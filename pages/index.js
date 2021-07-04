import styled from 'styled-components';
import Image from 'next/image';
import { createClient } from 'contentful';
import EventsList from '../components/home-page/EventsList';
import Container from '../components/common/Container';
import BlueCircle from '../components/common/BlueCircle';
import RedCircle from '../components/common/RedCircle';
import { motion } from 'framer-motion';

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

const ImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Caption = styled.p`
  font-size: 1rem;
  position: absolute;
  right: -5.5rem;
  transform: rotate(-90deg);

  @media (min-width: 768px) {
    right: -5rem;
  }
`;

const mainImage = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
};

const HomePage = ({ eventsPL }) => {
  return (
    <Container>
      <ImageWrapper variants={mainImage} initial='hidden' animate='show'>
        <Image src='/images/hero-image.png' width={509} height={517} />
        <Caption>Ilustracja: Oasis of Hate</Caption>
      </ImageWrapper>
      <EventsList eventsPL={eventsPL} />
      <RedCircle top='0' left='-50%' toptablet='-50px' lefttablet='-50%' />
      <BlueCircle top='400px' right='-40%' toptablet='125px' righttablet='-60%' />
      <RedCircle top='800px' left='-50%' lefttablet='-40%' />
      <BlueCircle top='1500px' right='-50%' toptablet='950px' />
    </Container>
  );
};

export default HomePage;
