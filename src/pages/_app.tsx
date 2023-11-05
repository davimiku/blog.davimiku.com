import { ColorSchemeProvider } from 'color_scheme'
import { AppProps } from 'next/app'
import 'prism-themes/themes/prism-vsc-dark-plus.css'
import '../styles/globals.scss'
import '../styles/react-toggle.scss'

import { MDXProvider } from '@mdx-js/react'
import { ExternalLink } from 'components/link'
import type { MDXComponents } from 'mdx/types'
import Head from 'next/head'

const components: MDXComponents = {
  a: ExternalLink,
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ColorSchemeProvider>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </ColorSchemeProvider>
    </>
  )
}

export default MyApp
