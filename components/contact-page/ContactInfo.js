import React, { useContext } from 'react';
import Image from 'next/image';
import { LanguageContext } from '../../context/LanguageContext';
import RedCircle from '../../components/common/RedCircle';
import BlueCircle from '../../components/common/BlueCircle';
//styles
import { ImageWrapper, Caption, FlexWrapper, TextWrapper } from './ContactInfo.style';
//data
import contactContent from '../../data/contact-page';

const ContactInfo = () => {
  const { language } = useContext(LanguageContext);

  return (
    <FlexWrapper>
      <TextWrapper>
        {contactContent[language].map((paragraph, index) => (
          <React.Fragment key={index}>{paragraph}</React.Fragment>
        ))}
      </TextWrapper>
      <ImageWrapper>
        <Image src='/images/contact.png' alt='' width={465} height={370} />
        <Caption>{language === 'PL' ? 'fot. Katarzyna Szenajch' : 'Katarzyna Szenajch'}</Caption>
      </ImageWrapper>
      <RedCircle top='-10%' left='-50%' toptablet='-25%' />
      <BlueCircle top='30%' right='-50%' toptablet='10%' />
      <RedCircle top='90%' left='-10%' toptablet='100%' />
    </FlexWrapper>
  );
};

export default ContactInfo;
