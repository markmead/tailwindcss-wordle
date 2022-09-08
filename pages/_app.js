import '../styles/globals.css'

import Head from 'next/head'

import { Layout } from '../components/Layout'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tailwind CSS Wordle | HyperUI</title>
        <meta
          name="description"
          content="Wordle meets Tailwind CSS! Guess from over 6000 Tailwind CSS class names."
          key="description"
        />
      </Head>

      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
