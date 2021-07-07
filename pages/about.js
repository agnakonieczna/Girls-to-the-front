import styled from 'styled-components';
import ScrollToTop from '../components/common/ScrollToTop';
import GeneralInfo from '../components/about-page/GeneralInfo';
import RainbowSection from '../components/about-page/Rainbow/RainbowSection';
import Team from '../components/about-page/Team/Team';

const PageWrapper = styled.div`
  padding-bottom: 10rem;
`;

const About = () => {
  return (
    <PageWrapper>
      <GeneralInfo />
      <RainbowSection />
      <Team />
      <ScrollToTop />
    </PageWrapper>
  );
};

export default About;
