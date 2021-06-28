//@ts-nocheck
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../component/layout';
import '../styles/home.css'
import '../styles/rumah.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout><Component {...pageProps} /></Layout>
  )
}

export default MyApp
