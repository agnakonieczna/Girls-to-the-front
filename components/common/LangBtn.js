import styled from 'styled-components';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const StyledLangBtn = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 700;
  padding: 1rem;
  cursor: pointer;
  z-index: 2;

  @media (min-width: 1024px) {
    margin-right: 1.5rem;
  }
`;

const LangBtn = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return <StyledLangBtn onClick={changeLanguage}>{language === 'PL' ? 'EN' : 'PL'}</StyledLangBtn>;
};

export default LangBtn;
