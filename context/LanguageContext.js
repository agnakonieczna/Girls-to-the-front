import { createContext, useEffect, useState } from 'react';

export const LanguageContext = createContext(null);

const LanguageProvider = (props) => {
  const [language, setLanguage] = useState('PL');

  const changeLanguage = () => {
    setLanguage(language === 'PL' ? 'EN' : 'PL');
  };

  return (
    <LanguageContext.Provider value={{language, changeLanguage}}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
