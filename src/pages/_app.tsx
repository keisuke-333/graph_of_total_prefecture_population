import '../styles/globals.scss'
import '../styles/reset.scss'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { queryClient } from '@/libs/queryClient'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>都道府県別総人口推移グラフ</title>
        <meta name='description' content='都道府県別の総人口推移グラフを表示するSPA' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
