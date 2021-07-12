import Container from '../components/common/Container';
import Intro from '../components/zines-page/Intro';
import ZineList from '../components/zines-page/ZineList';
import ScrollToTop from '../components/common/ScrollToTop';

const Zines = () => {
  return (
    <Container>
      <Intro />
      <ZineList />
      <ScrollToTop />
    </Container>
    
  );
};

export default Zines;
