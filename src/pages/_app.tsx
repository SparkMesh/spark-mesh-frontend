import '@/styles/globals.css'
import '@/components/styles.css'
import type { AppProps } from 'next/app'
import NavBar from '@/components/NavBar'
export default function App({ Component, pageProps }: AppProps) {
  return<main><NavBar/> <Component {...pageProps} /></main>
}
