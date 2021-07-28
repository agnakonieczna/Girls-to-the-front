import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Container from '../common/Container';
import BlueCircle from '../common/BlueCircle';
import RedCircle from '../common/RedCircle';
import CustomImage from '../common/CustomImage';
import Link from 'next/link';
import { LanguageContext } from '../../context/LanguageContext';
import ArrowSvg from '../../public/images/arrow.svg';
//styles
import { EventTitle, EventDate, TextParagraph, Arrow } from './EventDetails.style';
import { useContext } from 'react';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <TextParagraph>{children}</TextParagraph>
  }
};

const EventDetails = ({ selectedEvent }) => {
  const { image, title, date, text } = selectedEvent.fields;
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <Link href='/'>
        <Arrow>
          <ArrowSvg />
        </Arrow>
      </Link>
      <CustomImage
        src={'https:' + image.fields.file.url}
        alt={title}
        width={image.fields.file.details.image.width}
        height={image.fields.file.details.image.height}
        center
      />
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
