import Image from "next/image";
import React from "react";

function TwoColumnSection({ section, index }) {
  const { section_type } = section
  
  let sectionClass = "";

  return (
    <>
      { (section?.section_type == "containter" || section_type == null ) && (
        <section className="container my-5">
          <SectionTitle title={section.title} />
          <div className="row  mb-5">
            <TwoColumnSectionInner section={section} index={index} />
          </div>
        </section>
      )}

      {section.section_type == "row" && (
        <section className="my-5">
          <SectionTitle title={section.title} />
          <div className="row mb-5">
            <TwoColumnSectionInner section={section} index={index} />
          </div>
        </section>
      )}
      {section.section_type == "containter-fluid" && (
        <section className=" my-5">
          <SectionTitle title={section.title} />
          <div className="containter-fluid  mb-5">
            <TwoColumnSectionInner section={section} index={index} />
          </div>
        </section>
      )}
    </>
  );
}

export default TwoColumnSection;

TwoColumnSection.defaultProps = {
  index: 0,
  section: {
    section_type: "row"
  }
};

export const TwoColumnSectionInner = ({ section, index }) => {
  return (
    <>
      <div
        className={
          index % 2 == 0
            ? "col-sm-12 col-md-6 py-2 overflow-hidden order-md-last "
            : "col-sm-12 col-md-6 py-2 overflow-hidden order-md-first position-relative "
        }
      >
        {section.image != null && (
          <>
            <img
              className="img-fluid img-responsive"
              src={section.image?.url}
              alt={section.image?.title}
            />
          </>
        )}
      </div>
      <div
        className={
          index % 2 == 0
            ? "col-sm-12 col-md-6 align-middle order-md-first pt-md-5 pt-lg-5 "
            : "col-sm-12 col-md-6 align-middle order-md-last pt-md-5 pt-lg-5 "
        }
      >
        <h3 className="h4"> {section.heading} </h3>
        <p className="lead text-justify"> {section.description} </p>
      </div>
    </>
  );
};

export const SectionTitle = ({ title }) => {
  return (
    <>
      {title && (
        <>
          <div className="row my-3">
            <h3 className="h3 text-center"> {title} </h3>
          </div>
        </>
      )}
    </>
  );
};
