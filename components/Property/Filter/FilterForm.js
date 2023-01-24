import React, { useState, useEffect } from "react";
import { getPropertyTypes } from "@/sdk-plugins/util";

const propTypes = [
  "Villa",
  "Apartment",
  "Farm House",
  "Residential House",
  "Benglow",
  "Plot",
  "Farm",
  "Shop",
  "Office Space",
];

function FilterForm() {
  const [propypes, setPropypes] = useState(propTypes);

  useEffect(() => {
    // const types = getPropertyTypes();
    // setPropypes(types);
  }, []);

  return (
    <div>
      <form id="propertyfilter">
        <div className="form-group">
          <label> Proprty Type </label>
          <select name="proptype">
            <option value="any"> All </option>
            {propypes &&
              propypes.map((value, index) => (
                <option key={index} value={value}>
                  {" "}
                  {value}{" "}
                </option>
              ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default FilterForm;
