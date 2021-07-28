import styled from 'styled-components';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { LanguageContext } from '../../context/LanguageContext';

const StyledLangBtn = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 700;
  padding: 1rem;
  cursor: pointer;
  z-index: 4;
  position: relative;

  @media (min-width: 1024px) {
    margin-right: 1.5rem;
  }
`;

const LangBtn = () => {
  const router = useRouter();
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      {router.pathname === '/[slug]' ? null : (
        <StyledLangBtn onClick={changeLanguage}>{language === 'PL' ? 'EN' : 'PL'}</StyledLangBtn>
      )}
    </div>
  );
};

export default LangBtn;
