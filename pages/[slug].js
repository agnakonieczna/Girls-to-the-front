import { createClient } from 'contentful';
import EventDetails from '../components/event-details-page/EventDetails';

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
    revalidate: 60
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

const EventDetailsPage = ({ selectedEvent }) => {
  return <EventDetails selectedEvent={selectedEvent} />;
};

export default EventDetailsPage;
