import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/global';
import { SettingsContextProvider } from '../contexts/SettingsContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <SettingsContextProvider>
        <Component {...pageProps} />
      </SettingsContextProvider>
    </>
  );
}

export default MyApp;
