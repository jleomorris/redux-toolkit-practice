import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';
import Nav from '../components/Nav/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
