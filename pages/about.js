import styled from 'styled-components';
import Head from 'next/head';
import ScrollToTop from '../components/common/ScrollToTop';
import GeneralInfo from '../components/about-page/GeneralInfo';
import RainbowSection from '../components/about-page/Rainbow/RainbowSection';
import Team from '../components/about-page/Team/Team';
import Concerts from '../components/about-page/Concerts/Concerts';
import Slider from '../components/about-page/Slider/Slider';
import AboutUs from '../components/about-page/AboutUs/AboutUs';

const PageWrapper = styled.div`
  padding-bottom: 5rem;
`;

const About = () => {
  return (
    <PageWrapper>
      <GeneralInfo />
      <RainbowSection />
      <Team />
      <Concerts />
      <Slider />
      <AboutUs />
      <ScrollToTop />
    </PageWrapper>
  );
};

export default About;
