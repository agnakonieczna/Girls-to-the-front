import { useContext, useEffect } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import Paragraph from './Paragraph';
import { useAnimation } from 'framer-motion';

const paragraphContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } }
};

const CustomParagraph = ({ children, ...props }) => {
  const { language } = useContext(LanguageContext);
  console.log(language);
  const controls = useAnimation();

  useEffect(() => {
    controls.set({ opacity: 0 });
    controls.start({
      opacity: 1,
      transition: { duration: 0.75 }
    });
  }, [language]);

  return (
    <Paragraph animate={controls} {...props}>
      {children}
    </Paragraph>
  );
};

export default CustomParagraph;
