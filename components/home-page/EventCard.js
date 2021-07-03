import Link from 'next/link';
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

const EventCard = ({ event }) => {
  const { slug, title, textPreview, date, image } = event;

  return (
    <EventWrapper>
      <EventContentWrapper>
        <EventTitle>{title}</EventTitle>
        <EventText>{textPreview}...</EventText>
        <FlexWrapper>
          <EventDate>{date}</EventDate>
          <EventButton>
            <Link href={`/${slug}`}>Read more</Link>
          </EventButton>
        </FlexWrapper>
      </EventContentWrapper>
      <Image src={image.fields.file.url} alt={title} />
    </EventWrapper>
  );
};

export default EventCard;
