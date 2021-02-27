import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'themes/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js Pro - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon.png" />
        <link rel="apple-touch-icon" href="/img/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple Next.js Boilerplate Ready to production"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
