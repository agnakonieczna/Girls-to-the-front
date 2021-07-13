import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Layout from '../components/layout/Layout';
import GlobalStyle from '../styles/GlobalStyle';
import GlobalFonts from '../styles/GlobalFonts';
import theme from '../styles/theme';
import { AnimatePresence, motion } from 'framer-motion';

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
    <Wrapper>
      <GlobalFonts />
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
  );
}
