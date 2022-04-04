import "../styles/globals.css";

import Head from "next/head";

import { Layout } from "../components/Layout";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4HQZYDVZ32"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4HQZYDVZ32');
          `,
          }}
        />

        <title>Tailwind CSS Wordle | HyperUI</title>
        <meta
          name="description"
          content="Guess from over 6000 Tailwind CSS class names. It's Wordle for Tailwind CSS."
          key="description"
        />
      </Head>

      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
