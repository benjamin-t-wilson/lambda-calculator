import React, { useState } from "react";

//import any components needed
import { specials } from "../../../data.js";
import Spec from "jest-jasmine2/build/jasmine/Spec";
//Import your array data to from the provided data file
import SpecialButton from "./SpecialButton";

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  return (
    <div className="specDiv">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      specialState.map(cv => {
        return (
          <SpecialButton className="special" spec={cv} key={cv.toString() + "spec"} />
        );
      })}
    </div>
  );
};
export default Specials;
