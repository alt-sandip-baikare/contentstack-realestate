import React from "react";
import Layout from "@/components/Layout/Layout";
import Stack from "@/sdk-plugins/index";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import { jsonToHtml } from "@contentstack/json-rte-serializer";

function Page({ page, navigation }) {
  const pageContent = jsonToHtml(page.content);
  return (
    <>
      <Layout navitems={navigation}>
        <div className="container">
          <section className="row description my-3">
            <div className="col-md-8 m-auto desc text-justify">
              <h1 className="h2"> {page.title} </h1>
              <div dangerouslySetInnerHTML={{ __html: pageContent }} />
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default Page;
export async function getStaticPaths({}) {
  return {
    paths: ["/pages/terms-and-conditions", "/pages/privacy-policy"],
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const { page } = params;
  const result = await Stack.getSpecificEntry(
    "pages",
    "/pages/" + page,
    "en-us"
  );

  const navitems = await Stack.getSpecificEntryKeyValue(
    "navigation_menu",
    "menu_location",
    "header",
    "en-us"
  );

  if (result.length == 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page: result[0],
      navigation: navitems[0],
    },
  };
}
