import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

// rendering the app
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <div>
          <Head>
            <link rel='icon' href='/favicon.png' />
            <link
              rel='stylesheet'
              href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
              integrity='sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=='
              crossOrigin='anonymous'
              referrerpolicy='no-referrer'
            />
          </Head>
          <div>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </Provider>
    </>
  )
}

export default MyApp
