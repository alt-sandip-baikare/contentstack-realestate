import Link from "next/link";
import React from "react";
import ArrowRight from "../Icons/ArrowRight";

function ListingSection({heading, link, children}) {
  return (
    <>
      <section className="bg-white py-5">
        <div className="container px-5">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="mb-0">
                {heading}
            </h2>
            <Link
              className="btn btn-sm btn-primary d-inline-flex align-items-center"
              href={link}
            >
              See more
              <ArrowRight />
            </Link>
          </div>
          <div className="row gx-5">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export default ListingSection;
