import { useContext, useState, useEffect } from 'react';
import { createClient } from 'contentful';
import EventCard from './EventCard/EventCard';
import { LanguageContext } from '../../context/LanguageContext';

const EventsList = ({ eventsPL }) => {
  const [events, setEvents] = useState(eventsPL);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    });

    client
      .getEntries({ content_type: 'event', 'fields.language': language })
      .then((data) => setEvents(data.items));
  }, [language]);

  return events.map((event) => {
    return <EventCard key={event.sys.id} event={event.fields} />;
  });
};

export default EventsList;
