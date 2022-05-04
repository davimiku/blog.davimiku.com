import 'prism-themes/themes/prism-vsc-dark-plus.css'
import '../styles/globals.scss'
import { ColorSchemeProvider } from 'color_scheme'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorSchemeProvider>
      <Component {...pageProps} />
    </ColorSchemeProvider>
  )
}

export default MyApp
