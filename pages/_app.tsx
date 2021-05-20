import '../styles/globals.css'
import Layout from '../layouts'

function MyApp({ Component, pageProps }) {
  return (
  <Layout title='Blog' description='My Blog'>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
