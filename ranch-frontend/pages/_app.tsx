import { Provider } from 'react-redux';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createStore } from '../stores/rootStore';
import { useEffect, useMemo } from 'react';
import { loadFromLocalStorage } from '../stores/auth';

function MyApp({ Component, pageProps }: AppProps) {

  const store = useMemo(() => {
    const _store = createStore();
    if (typeof localStorage !== undefined) {
      _store.dispatch(loadFromLocalStorage());
    };
    return _store;
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
