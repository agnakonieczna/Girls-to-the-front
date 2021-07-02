import styled from 'styled-components';
import { createClient } from 'contentful';
import Container from '../components/common/Container';
import BlueCircle from '../components/common/BlueCircle';
import RedCircle from '../components/common/RedCircle';
import Image from 'next/image';

export async function getStaticProps(context) {
  const slug = context.params.slug;

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const resp = await client.getEntries({ content_type: 'event' });

  const selectedEvent = resp.items.find((item) => item.fields.slug === slug);

  return {
    props: {
      selectedEvent,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const resp = await client.getEntries({ content_type: 'event' });

  const paths = resp.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

const EventTitle = styled.h2`
  font-family: 'Monument Extended Bold';
  margin: 3rem 0;
  line-height: 35px;
  -webkit-text-stroke: 1px black;
  color: ${({ theme }) => theme.colors.marine};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
`;

const EventDate = styled.p`
  margin-bottom: 3rem;
`;

const EventDetails = ({ selectedEvent }) => {
  const { image, title, date, text } = selectedEvent.fields;
  console.log(selectedEvent.fields);

  return (
    <Container>
      {/* <Image src={image.fields.file.url} alt={title} width={619} height={348} /> */}
      <EventTitle>{title}</EventTitle>
      <EventDate>{date}</EventDate>
      <p>{text}</p>
      <RedCircle top='-25%' left='-50%' />
      <BlueCircle bottom='10%' right='-40%' />
      <RedCircle top='40%' left='-50%' lefttablet='-40%' />
      <BlueCircle top='180%' right='-50%' toptablet='70%' />
    </Container>
  );
};

export default EventDetails;
