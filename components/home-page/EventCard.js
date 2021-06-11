import styled from 'styled-components';
import Link from 'next/link';

const EventWrapper = styled.div`
  max-width: 965px;
  height: auto;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 1px 12px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  margin: 10rem auto;

  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const EventTitle = styled.h2`
  font-family: 'Monument Extended';
  text-transform: uppercase;
  margin: 0.5rem 0;
`;

const EventText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.marine};
`;

const EventContentWrapper = styled.div`
  padding: 2rem;
  width: 100%;

  @media (min-width: 425px) {
    padding: 5rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem 7rem 3rem 5rem;
    width: 55%;
  }
`;

const EventDate = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.marine};
`;

const EventButton = styled.button`
  font-size: 1.2rem;
  text-decoration: 'none';
  font-weight: 700;
  cursor: pointer;
  border: none;
  background-color: transparent;

  a {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  width: auto;
  height: 100%;
  max-height: 30rem;
  object-fit: cover;

  @media (min-width: 1024px) {
    width: 45%;
    height: auto;
    object-fit: cover;
  }
`;

const EventCard = ({ event }) => {
  console.log(event);
  const { slug, title, textPreview, date, image } = event;

  return (
    <EventWrapper>
      <EventContentWrapper>
        <EventTitle>{title}</EventTitle>
        <EventText>{textPreview}...</EventText>
        <FlexWrapper>
          <EventDate>{date}</EventDate>
          <EventButton>
            <Link href={`events/${slug}`}>Read more</Link>
          </EventButton>
        </FlexWrapper>
      </EventContentWrapper>
      <Image src={image.fields.file.url} alt={title} />
    </EventWrapper>
  );
};

export default EventCard;
