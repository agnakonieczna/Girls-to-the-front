import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Layout from '../components/layout/Layout';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

export default function App({ Component, pageProps, router }) {
  const [overflow, setOverflow] = useState(false);

  const handleOverflow = () => {
    setOverflow(!overflow);
  };

  return (
    <>
      <Head>
        <title>G*TTF</title>
        <meta content='Girls to the front' name='title' />
        <meta content='' name='description'></meta>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest'></link>
      </Head>
      <Wrapper>
        <GlobalStyle overflow={overflow} />
        <ThemeProvider theme={theme}>
          <Layout handleOverflow={handleOverflow}>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={router.route}
                variants={{
                  initial: { y: -50, opacity: 0 },
                  animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
                  exit: { y: -50, opacity: 0, transition: { duration: 0.5 } }
                }}
                initial='initial'
                animate='animate'
                exit='exit'
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </Layout>
        </ThemeProvider>
      </Wrapper>
    </>
  );
}
