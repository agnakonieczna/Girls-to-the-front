import Link from 'next/link';
import Container from '../components/common/Container';

const ErrorPage = () => {
  return (
    <Container>
      <img src='/images/error-page-mobile.png' />
      <Link href='/'>Wróć do strony głównej</Link>
    </Container>
  );
};

export default ErrorPage;
