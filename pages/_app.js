import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout/Layout';
import GlobalStyle from '../styles/GlobalStyle';
import GlobalFonts from '../styles/GlobalFonts';
import theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  const [overflow, setOverflow] = useState(false);

  const handleOverflow = () => {
    setOverflow(!overflow);
  };

  return (
    <>
      <GlobalFonts />
      <GlobalStyle overflow={overflow} />
      <ThemeProvider theme={theme}>
        <Layout handleOverflow={handleOverflow}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
