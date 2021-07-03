import { useState, useContext } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import Container from '../common/Container';
import BlueCircle from '../common/BlueCircle';
import RedCircle from '../common/RedCircle';
import { LanguageContext } from '../../context/LanguageContext';
//styles
import { ImageWrapper, EventTitle, EventDate, TextParagraph } from './EventDetails.style';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <TextParagraph>{children}</TextParagraph>,
  },
};

const EventDetails = ({ selectedEvent }) => {
  const [event, setEvent] = useState(selectedEvent);
  const { image, title, date, text } = event.fields;
  // const { language } = useContext(LanguageContext);

  // useEffect(() => {
  //   const client = createClient({
  //     space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  //     accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  //   });

  //   client
  //     .getEntries({ content_type: 'event', 'fields.language': language })
  //     .then((data) => setEvents(data.items));
  // }, [language]);

  return (
    <Container>
      <ImageWrapper>
        <Image
          src={'https:' + image.fields.file.url}
          alt={title}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
        />
      </ImageWrapper>
      <EventTitle>{title}</EventTitle>
      <EventDate>{date}</EventDate>
      {documentToReactComponents(text, options)}
      <RedCircle top='-25%' left='-50%' />
      <BlueCircle bottom='10%' right='-40%' />
      <RedCircle top='40%' left='-50%' lefttablet='-40%' />
      <BlueCircle top='180%' right='-50%' toptablet='70%' />
    </Container>
  );
};

export default EventDetails;
