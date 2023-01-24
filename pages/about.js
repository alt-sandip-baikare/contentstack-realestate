import React from "react";
import Layout from "@/components/Layout/Layout";
import Stack from "@/sdk-plugins/index";
import Banner from "@/components/Home/Banner/Banner";
import TwoColumnSection from "@/components/Elements/TwoColumnSection";

function About({ page, navigation }) {
  console.log("🚀 ~ file: about.js:8 ~ About ~ page", page)
  return (
    <>
      <Layout navitems={navigation}>
        <div className="banner">
          <Banner bannerdata={page.banner[0] || []} />
        </div>
        <div className="container">
          <section className="row description my-3">
            <div className="col-md-8 m-auto desc lead text-center">
              <div dangerouslySetInnerHTML={{ __html: page.content }} />
            </div>
          </section>
          <TwoColumnSection sections={page.two_column} />
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
