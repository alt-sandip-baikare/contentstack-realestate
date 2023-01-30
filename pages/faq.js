import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import React from "react";
import Stack from "@/sdk-plugins/index";

function Faq({ page, navigation }) {
  const faqs = page.faq_s || [];
  return (
    <Layout navitems={navigation}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto mb-5">
            <h1 className="h2"> {page.title} </h1>
            <div className="description ">{page.description}</div>
            {faqs.length && (
              <div className="col-md-12 m-auto">
                <div className="accordion my-3" id="faqaccordian">
                  {faqs &&
                    faqs.map((item, index) => (
                      <div key={index} className="accordion-item">
                        <h2 className="accordion-header" id={"heading" + index}>
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={"#collapse" + index}
                            aria-expanded="false"
                            aria-controls={"collapse" + index}
                          >
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={"collapse" + index}
                          className="accordion-collapse collapse"
                          aria-labelledby={"heading" + index}
                          data-bs-parent="#faqaccordian"
                        >
                          <div className="accordion-body">{item.answer}</div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Faq;

export async function getStaticProps() {
  const result = await Stack.getEntryWithRef("faq", [], "en-us");
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
