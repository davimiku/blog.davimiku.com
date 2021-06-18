import 'prism-themes/themes/prism-vsc-dark-plus.css'
import '../styles/globals.scss'
import Layout from '../layouts'
import { ColorSchemeProvider } from 'contexts/color_scheme'

function MyApp({ Component, pageProps }) {
  return (
    <ColorSchemeProvider>
      <Layout title='Blog' description='My Blog'>
        <Component {...pageProps} />
      </Layout>
    </ColorSchemeProvider>
  )
}

export default MyApp
