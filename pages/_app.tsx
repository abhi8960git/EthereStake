import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react';

// 1. import `NextUIProvider` component
import { Navbar, NextUIProvider } from '@nextui-org/react';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
    </React.StrictMode>
  )
}
