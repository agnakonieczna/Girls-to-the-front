import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import Link from 'next/link';
//styles
import { PageWrapper, StyledLink } from './ErrorInfo.style';

const ErrorInfo = () => {
  const { language } = useContext(LanguageContext);

  return (
    <PageWrapper>
      {language === 'PL' ? (
        <picture>
          <source srcSet='/images/error-page-desktop-PL.png' media='(min-width: 768px)' />
          <img src='/images/error-page-mobile-PL.png' alt='' />
        </picture>
      ) : (
        <picture>
          <source srcSet='/images/error-page-desktop-EN.png' media='(min-width: 768px)' />
          <img src='/images/error-page-mobile-EN.png' alt='' />
        </picture>
      )}
      <Link href='/'>
        <StyledLink>
          {language === 'PL' ? 'Wróć do strony głównej' : 'Go back to homepage'}
        </StyledLink>
      </Link>
    </PageWrapper>
  );
};

export default ErrorInfo;
