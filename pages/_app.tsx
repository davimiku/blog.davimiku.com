import 'prism-themes/themes/prism-vsc-dark-plus.css'
import '../styles/globals.scss'
import Layout from '../layouts'

function MyApp({ Component, pageProps }) {
  return (
    <Layout title='Blog' description='My Blog'>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
