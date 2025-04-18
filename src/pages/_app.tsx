import { AppProps } from 'next/app'
import 'prism-themes/themes/prism-vsc-dark-plus.css'
import '../styles/globals.css'

import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
