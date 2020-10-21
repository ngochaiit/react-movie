/* eslint-disable react/prop-types */
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import Head from 'next/head'
import theme from '~/components/styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Netflix Website</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
