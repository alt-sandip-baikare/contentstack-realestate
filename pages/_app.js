import Head from 'next/head';
import { useEffect } from 'react';
import 'styles/scss/global.scss' // added

export default function App({ Component, pageProps }) {
  // Added Bootstrap JS in useeffect hook load page fully to use the window object
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />       
    </Head>
    <Component {...pageProps} />
    </>
    );
}
