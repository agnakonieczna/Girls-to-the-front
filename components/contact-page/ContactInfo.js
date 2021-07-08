import { Fragment, useContext } from 'react';
import Image from 'next/image';
import { LanguageContext } from '../../context/LanguageContext';
import RedCircle from '../../components/common/RedCircle';
import BlueCircle from '../../components/common/BlueCircle';
import { useInView } from 'react-intersection-observer';
import CustomImage from '../common/CustomImage';
//assets
import photo from '../../public/images/contact.png';
//styles
import { ImageWrapper, Caption, FlexWrapper, TextWrapper } from './ContactInfo.style';
//data
import contactContent from '../../data/contact-page';

const contactImage = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4,
    },
  },
};

const ContactInfo = () => {
  const { language } = useContext(LanguageContext);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <FlexWrapper>
      <TextWrapper>
        {contactContent[language].map((paragraph, index) => (
          <Fragment key={index}>{paragraph}</Fragment>
        ))}
      </TextWrapper>
      <CustomImage src={photo} alt='' width={465} height={370} />
      <RedCircle top='-10%' left='-50%' toptablet='-25%' />
      <BlueCircle top='30%' right='-50%' toptablet='10%' />
      <RedCircle top='90%' left='-10%' toptablet='100%' />
    </FlexWrapper>
  );
};

export default ContactInfo;
