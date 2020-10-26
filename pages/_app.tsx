import '@/styles/main.scss';
import { AppProvider } from '@/components/AppProvider';

const App = ({ Component, pageProps }) => (
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
);

export default App;
