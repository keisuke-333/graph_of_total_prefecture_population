import '../styles/globals.scss'
import '../styles/reset.scss'

import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>都道府県別総人口推移グラフ</title>
        <meta name='description' content='都道府県別の総人口推移グラフを表示する SPA' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
