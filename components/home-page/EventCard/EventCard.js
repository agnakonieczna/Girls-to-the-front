import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
//styles
import {
  EventWrapper,
  EventContentWrapper,
  EventTitle,
  EventText,
  FlexWrapper,
  EventDate,
  EventButton,
  Image
} from './EventCard.style';

const eventCard = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const EventCard = ({ event }) => {
  const [ref, inView] = useInView({
    triggerOnce: true
  });
  const { slug, title, textPreview, date, image } = event;

  return (
    <Link href={`/${slug}`}>
      <EventWrapper
        ref={ref}
        variants={eventCard}
        initial='hidden'
        animate={inView ? 'show' : 'hidden'}
      >
        <EventContentWrapper>
          <EventTitle>{title}</EventTitle>
          <EventText>{textPreview}</EventText>
          <FlexWrapper>
            <EventDate>{date}</EventDate>
            <EventButton>Read more</EventButton>
          </FlexWrapper>
        </EventContentWrapper>
        <Image src={image.fields.file.url} alt={title} />
      </EventWrapper>
    </Link>
  );
};

export default EventCard;
