import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import Link from 'next/link';
import styled from 'styled-components';
import Container from '../components/common/Container';

const StyledLink = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-block;
  margin: 2rem auto;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.4rem solid ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  padding: 1rem;
  cursor: pointer;
`;

const PageWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ErrorPage = () => {
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

export default ErrorPage;
