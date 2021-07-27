import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            rel='preload'
            as='style'
            href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap'
            media='print'
            onload="this.media='all'"
          />
          <noscript>
            <link
              rel='stylesheet'
              href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap'
            />
          </noscript>
          <link
            rel='preload'
            as='font'
            href='/fonts/MonumentExtended-Black.woff2'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            as='font'
            href='/fonts/MonumentExtended-Light.woff2'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            as='font'
            href='/fonts/MonumentExtended-Regular.woff2'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @font-face {
                font-family: 'Monument Extended';
                src: local('Monument Extended'), local('Monument Extended'),
                url('fonts/MonumentExtended-Regular.woff') format('woff'),
                url('fonts/MonumentExtended-Regular.woff2') format('woff2');
                font-weight: 400;
                font-style: normal;
            }
            @font-face {
              font-family: 'Monument Extended Bold';
              src: local('Monument Extended Bold'), local('Monument Extended Bold'),
              url('fonts/MonumentExtended-Black.woff') format('woff'),
              url('fonts/MonumentExtended-Black.woff2') format('woff2');
              font-weight: 700;
              font-style: normal;
          }`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
