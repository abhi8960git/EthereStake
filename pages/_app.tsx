import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react';

// 1. import `NextUIProvider` component
import { Navbar, NextUIProvider } from '@nextui-org/react';
import { store } from '../store/index';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <React.StrictMode>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </React.StrictMode>
    </Provider>
  )
}
