import Head from 'next/head'
import { Inter } from '@next/font/google'
import Home from '@/components/Home/Home'
import Stack from "../sdk-plugins/index";
import { getFeaturedProperties } from '@/sdk-plugins/util';

const inter = Inter({ subsets: ['latin'] })

export default function HomePage( {data} ) {
  return (
    <>
      <Head>
        <title>Real Estate Agency</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Home pagedata={data[0]} />
    </>
  )
}

export async function getStaticProps() {
  const result = await Stack.getEntryWithRef('home', ['banner', 'sections'], 'en-us');
  // console.log("🚀 ~ file: index.js:24 ~ getStaticProps ~ result", result)
  // const featuredProperties = await getFeaturedProperties()
  
  return {
    props: {
      data: result[0],
      // featuredProps : featuredProperties[0]
    }
  }
}