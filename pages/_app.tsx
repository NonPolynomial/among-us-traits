import '@/styles/main.scss';
import { ComponentType } from 'react';
import { AppProvider } from '@/components/AppProvider';

type Props<
  P = {
    [key: string]: unknown,
  },
> = {
  Component: ComponentType,
  pageProps: P,
};

const App = ({ Component, pageProps }: Props) => (
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
);

export default App;
