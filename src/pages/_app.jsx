import FacebookMessenger from '@/components/FacebookMessenger'
import '@/styles/globals.css'
import { Fragment } from 'react'

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <FacebookMessenger />
      <Component {...pageProps} />
    </Fragment>
  )
}
