import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SOLI-JANG / PORTFOLIO</title>
      </Head>

      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />

      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
