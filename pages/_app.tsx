import Head from 'next/head'
import '../styles/index.css'
import { Provider } from 'react-redux'
import { store } from '@/store/.'

import { motion } from 'framer-motion'  

export default function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <Provider store={store}>
        <motion.div
          key={router.route}
          initial="pageInitial" 
          animate="pageAnimate"
         
        >
          <Component {...pageProps} />   
        </motion.div>

      </Provider>
    </>
  )
}