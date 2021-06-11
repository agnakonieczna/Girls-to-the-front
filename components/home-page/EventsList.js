import EventCard from './EventCard';

const EventsList = ({ events }) => {
  return events.map((event) => {
    return <EventCard key={event.id} event={event.fields} />;
  });
};

export default EventsList;
