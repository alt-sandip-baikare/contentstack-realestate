import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import Banner from '@/components/Home/Banner/Banner'
import ListingSection from '@/components/Property/ListingSection'
import PropertyCard from '@/components/Property/PropertyCard'
import Layout from '@/components/Layout/Layout'
import { useState, useEffect } from 'react'
import Stack from "@/sdk-plugins/index";
import { getFeaturedProps } from '@/sdk-plugins/index'
import { getFeaturedProperties } from '@/sdk-plugins/util'


export default function Home({pagedata, navitems}) {
  const [featured, setFeatured]  = useState([])   
  
  useEffect( () => {
    const featuredProperties = getFeaturedProperties()
    setFeatured(featuredProperties)

  }, [])
  
  return (
    <>
      <main className={styles.main}>
      <Layout navitems={navitems} >
          <Banner bannerdata={pagedata.banner[0]}/>
          
          <ListingSection heading="Featured Listing" link="/">
           
          </ListingSection>

          <ListingSection heading="Newest Listings" link="/">
           
          </ListingSection>
        </Layout>
      </main>
    </>
  )
}
