import { Provider } from 'react-redux';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createStore } from '../stores/rootStore';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={createStore()}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
