import { useContext } from 'react';
import Paragraph from './Paragraph';
import { LanguageContext } from '../../context/LanguageContext';

const paragraphContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
};

const CustomParagraph = ({ children, ...props }) => {
  return (
    <Paragraph
      variants={paragraphContainer}
      initial='hidden'
      animate='show'
      {...props}
    >
      {children}
    </Paragraph>
  );
};

export default CustomParagraph;
