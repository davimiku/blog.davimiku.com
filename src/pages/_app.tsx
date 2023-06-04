import 'prism-themes/themes/prism-vsc-dark-plus.css'
import '../styles/globals.scss'
import { ColorSchemeProvider } from 'color_scheme'
import { AppProps } from 'next/app'

import { MDXProvider } from '@mdx-js/react'
import { ExternalLink } from 'components/link'
import type { MDXComponents } from 'mdx/types'
const components: MDXComponents = {
  a: ExternalLink,
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorSchemeProvider>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ColorSchemeProvider>
  )
}

export default MyApp
