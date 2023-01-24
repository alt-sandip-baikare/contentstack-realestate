import Layout from "@/components/Layout/Layout";
import Stack from "../../sdk-plugins/index";
import React from "react";
import Slider from "@/components/Slider/Slider";
import Style from "./../../styles/Property.module.scss";
import LeadForm from "@/components/Property/LeadForm/LeadForm";
import Card from "@/components/Elements/Card";
import Link from "next/link";
import Head from "next/head";
import Seo from "@/components/Elements/Seo";

function details({ property, slug }) {
  
  return (
    <Layout>
      <Head>
        <title> { property.title } - Real Estate </title>
        <Seo seoData={property.seo[0]} />
      </Head>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-9">
            <Link href="/properties"> <i className="fa fa-arrow-left"></i> Back to Properties  </Link>
            <Slider slides={property.images} />
            <div className="property-details my-3">
              <h1 className="h2"> {property.title} </h1>
              <div className="details">
                <ul className="w-100 mb-3 clearfix">
                  <li className={Style.proplist}> <strong>Area:</strong> {property.property_area} sqft </li>
                  <li className={Style.proplist}> <strong>No. of Bathroom:</strong> {property.number_of_bathroom} </li>
                  <li className={Style.proplist}> <strong>No. of Bedroom:</strong> {property.number_of_bedroom} </li>
                  <li className={Style.proplist}> <strong>Property Type:</strong> {property.property_type} </li>
                  <li className={Style.proplist}> <strong>Price:</strong> ₹ {property.price} </li>
                  <li className={Style.proplist}> <strong>Floors:</strong> {property.number_of_floors} </li>
                  
                  <li className="w-100 clearfix"> <i className="fa fa-location"></i> {property.address} {property.city} {property.pincode}</li>
                  
                </ul>
              </div>
              <div className="description">
                <h3 className={Style.headingBorder}>About Property </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: property.description }}
                />
                <h3 className={Style.headingBorder}>Amenities</h3>
                <div className="amenities row clearfix">
                  {property.aminities &&
                    property.aminities.map((amenity, index) => (
                      <div className="col-md-4 my-2" key={index}>
                        <i className="fa fa-check-circle mx-2"></i>
                        {amenity}
                      </div>
                    ))}
                </div>
              </div>
              { property.location && 
                <div className="location">
                  <h4 className="h4"> Location </h4>
                  {property.location}
                </div>
              }
            </div>
          </div>
          <div className="col-md-3">
            <Card
              heading="Request Inquiry"
              headingClass="h4"
              body={<LeadForm propID={property.uid} />}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default details;

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const propertySlug = "/" + slug;

  const result = await Stack.getSpecificEntryWihtRef(
    "properties",
    propertySlug,
    ['seo'],
    "en-us"
  );
  // 404 if we does not found the data in API response
  if (!result.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      property: result[0],
      slug: slug,
    },
  };
}
