import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowRight from "../Icons/ArrowRight";

function PropertyCard({ property }) {
  return (
    <>
      <div className="col-md-4 mb-3">
        <div className="card lift h-100 text-gray-800" href="#!">
          <div className="prop-badge">{property?.property_type}</div>
          <Image
            className="card-img-top"
            src={property.images[0].url}
            alt="..."
            width="800"
            height="220"
          />
          <div className="card-body">
            <Link href={"/properties" + property.url}>
              <h3 className="text-primary mb-0 h5">{property.title}</h3>
            </Link>

            <div className="small mt-2 text-gray-800 fw-500">
              {property.number_of_bedroom} bd | {property.number_of_bathroom} ba
              | {property.property_area} sqft
            </div>
            <div className="small text-gray-800">{property.city}</div>
          </div>
          <Link
            href={"/properties" + property.url}
            className="card-footer bg-transparent border-top d-flex align-items-center justify-content-between"
          >
            <div className="small text-gray-800">View Detils</div>
            <div className="small text-gray-800">
              <ArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PropertyCard;
