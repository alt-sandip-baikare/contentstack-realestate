import React, { useState, useEffect } from "react";
import {getPropertyTypes} from "@/sdk-plugins/util"


function FilterForm() {
    const [propypes, setPropypes] = useState(null)

    useEffect( () => {
      const types =  getPropertyTypes()
      setPropypes(types)
    }, [])
    
  return (
    <div>
      <form id="propertyfilter">
        <div className="form-group">
          <label> Proprty Type </label>
          {JSON.stringify(propypes)}
        </div>
      </form>
    </div>
  );
}

export default FilterForm;
