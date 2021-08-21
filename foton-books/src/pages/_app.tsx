import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Foton Books</title>
      </Head>

      <GlobalStyles />

      <NextNprogress
        color="#FF6978"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
