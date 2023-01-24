import Image from "next/image";
import React from "react";

function TwoColumnSection({ sections }) {
  return (
    <>
      {sections.map((section, index) => (
        <section key={index} className="row my-5 ">
          <div
            className={
              index % 2 == 0
                ? "col-sm-12 col-md-6 py-2 overflow-hidden order-md-last "
                : "col-sm-12 col-md-6 py-2 overflow-hidden position-relative order-md-first"
            }
          >
            {section.image != null && (
              <>
              <img 
              className="img-fluid img-responsive"
              src={section.image?.url}
              alt={section.image?.title}
              />
              {/* <div
                className="pt-2 w-full py-2 relative pt-[100%]"
                style={{
                  position: "relative",
                  width: "500px",
                  height: "250px",
                  maxHeight: "250px",
                  maxWidth: "500px",
                }}
              >
                <Image
                  className="-full h-full bject-cover rounded-2xl"
                  src={section.image?.url}
                  alt={section.image?.title}
                  fill
                  objectFit="cover"
                  priority
                />
              </div> */}
              </>
            )}
          </div>
          <div
            className={
              index % 2 == 0
                ? "col-sm-12 col-md-6 order-md-first "
                : "col-sm-12 col-md-6 order-md-last"
            }
          >
            <h3 className="h4"> {section.heading} </h3>
            <p className="lead"> {section.description} </p>
          </div>
        </section>
      ))}
    </>
  );
}

export default TwoColumnSection;
