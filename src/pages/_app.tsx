import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/global';
import Script from 'next/script';
import { SettingsContextProvider } from '../contexts/SettingsContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.NEXT_PUBLIC_GA});
          `}
      </Script>
      <GlobalStyles />
      <SettingsContextProvider>
        <Component {...pageProps} />
      </SettingsContextProvider>
    </>
  );
}

export default MyApp;
