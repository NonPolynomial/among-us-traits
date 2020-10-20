import '@/style.scss';
import { TranslationProvider } from '@components/Translation';

const App = ({ Component, pageProps }) => (
  <TranslationProvider>
    <Component {...pageProps} />
  </TranslationProvider>
);

export default App;
