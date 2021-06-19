import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Layout from '../components/layout/Layout';
import GlobalStyle from '../styles/GlobalStyle';
import GlobalFonts from '../styles/GlobalFonts';
import theme from '../styles/theme';

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

export default function App({ Component, pageProps }) {
  const [overflow, setOverflow] = useState(false);

  const handleOverflow = () => {
    setOverflow(!overflow);
  };

  return (
    <Wrapper>
      <GlobalFonts />
      <GlobalStyle overflow={overflow} />
      <ThemeProvider theme={theme}>
        <Layout handleOverflow={handleOverflow}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Wrapper>
  );
}
