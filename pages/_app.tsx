import { ReactNode, ReactElement } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

// The & is a type assertion. It is a way to tell TypeScript that you want to have a type with these two types together.
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page );

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout( <Component {...pageProps} /> )
}

export default MyApp
