import React, { useState } from "react";
import Layout from "@/components/Layout/Layout";
import Stack from "../../sdk-plugins/index"
import PropertyCard from "@/components/Property/PropertyCard";
import FilterForm from "@/components/Property/Filter/FilterForm";
import Card from "@/components/Elements/Card";

function Property({properties, navigation}) {

  const [props, setProperties] = useState(properties)

  return (
    <Layout navitems={navigation}>
      <div className="container">
        <div className="row py-3">
          <div className="col-md-3 border-2">          
            <Card 
            heading="FILTER"
            headingClass="h3"
            body={<FilterForm />}

            />
          </div>
          <div className="col-md-9">
            <h1 className="h3 text-uppercase fw-bold"> Property Listing </h1>
            <div className="property-listing row">
                {/* {JSON.stringify(properties)} */}
                { 
                    props && 
                    props.map( (property, index) =>
                        <PropertyCard key={index} property={property} />
                    )
                }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Property;

export async function getStaticProps({ params }) {
  const result = await Stack.getEntry(
    "properties",
    "en-us"
  );
  const navitems = await Stack.getSpecificEntryKeyValue(
    "navigation_menu",
    "menu_location",
    "header",
    "en-us"
  );

  return {
    props: {
        properties: result[0],
        navigation: navitems[0],
    },
  };
}
