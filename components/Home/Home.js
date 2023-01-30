import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Banner from "@/components/Home/Banner/Banner";
import ListingSection from "@/components/Property/ListingSection";
import PropertyCard from "@/components/Property/PropertyCard";
import Layout from "@/components/Layout/Layout";
import { useState, useEffect } from "react";
import Stack from "@/sdk-plugins/index";
import { getFeaturedProps } from "@/sdk-plugins/index";
import { getFeaturedProperties } from "@/sdk-plugins/util";
import TwoColumnSection from "../Elements/TwoColumnSection";

export default function Home({ pagedata, navitems, featured }) {
  // const [featured, setFeatured] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const featuredProps = await fetch("/api/property/featured-properties");
  //     const result = await featuredProps.json();
  //     setFeatured(result.data);
  //   })();
  //   return () => {
      
  //   };
   
  // }, []);

  return (
    <>
      <main className={styles.main}>
        <Layout navitems={navitems}>
          <Banner bannerdata={pagedata.banner[0]} />
          
          {featured.length ? (
            <>
              <ListingSection heading="Featured Listing" link="/properties">
                {featured.map((property, index) => (
                  <PropertyCard key={index} property={property} />
                ))}
              </ListingSection>
            </>
          ) : (
            <p> "Loading Featured Properties..." </p>
          )}

          {pagedata.components.map((component, key) => {
            if (component.two_column_layout) {
              return (
                <TwoColumnSection
                  section={component.two_column_layout}
                  index={key}
                />
              );
            }
          })}

          
        </Layout>
      </main>
    </>
  );
}
