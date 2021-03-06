import { Fragment, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import Image from 'next/image';
//assets
import photo from '../../public/images/contact.png';
//styles
import RedCircle from '../../components/common/RedCircle';
import BlueCircle from '../../components/common/BlueCircle';
import ImageWrapper from '../../components/common/ImageWrapper';
import { Caption, FlexWrapper, TextWrapper } from './ContactInfo.style';
//data
import contactContent from '../../data/contact-page';

const ContactInfo = () => {
  const { language } = useContext(LanguageContext);

  return (
    <FlexWrapper>
      <TextWrapper>
        {contactContent[language].map((paragraph, index) => (
          <Fragment key={index}>{paragraph}</Fragment>
        ))}
      </TextWrapper>
      <ImageWrapper marginLeft initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1, duration: 0.5}}} >
        <Image src={photo} alt='Ola Kamińska and Agata Wnuk in front of grafitti' width={465} height={371}/>
      </ImageWrapper>
      <RedCircle top='-10%' left='-50%' toptablet='-25%' />
      <BlueCircle top='70%' right='-50%' toptablet='10%' />
      <RedCircle top='90%' left='-10%' toptablet='100%' />
    </FlexWrapper>
  );
};

export default ContactInfo;
