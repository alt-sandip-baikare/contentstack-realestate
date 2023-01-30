import React from "react";
import Layout from "@/components/Layout/Layout";
import Stack from "@/sdk-plugins/index";
import Banner from "@/components/Home/Banner/Banner";
import TwoColumnSection from "@/components/Elements/TwoColumnSection";
import { jsonToHtml } from "@contentstack/json-rte-serializer";


function About({ page, navigation }) {

  const pageContent = jsonToHtml(page.content)
  return (
    <>
      <Layout navitems={navigation}>
        <div className="banner">
          <Banner bannerdata={page.banner[0] || []} />
        </div>
        <div className="container">
          { page?.two_column?.length && page.two_column.map( (section, index) =>
            <TwoColumnSection key={index} section={section} index={index}  />
          )}
          <section className="row description my-3">
            <div className="col-md-8 m-auto desc lead text-justify">
              <div dangerouslySetInnerHTML={{ __html: pageContent }} />
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default About;

export async function getStaticProps() {
  const result = await Stack.getEntryWithRef("about", ["banner", 'two_column'], "en-us");
  const navitems = await Stack.getSpecificEntryKeyValue(
    "navigation_menu",
    "menu_location",
    "header",
    "en-us"
  );

  return {
    props: {
      page: result[0][0],
      navigation: navitems[0],
    },
  };
}
