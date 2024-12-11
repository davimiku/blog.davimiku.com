import { AppProps } from 'next/app'
import 'prism-themes/themes/prism-vsc-dark-plus.css'
import '../styles/globals.scss'

import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Script src='/scripts/color-scheme.js' strategy='lazyOnload' />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
