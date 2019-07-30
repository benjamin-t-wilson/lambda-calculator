import React, { useState } from "react";

//import any components needed
import { operators } from "../../../data.js";
//Import your array data to from the provided data file
import OperatorButton from "./OperatorButton";

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div className="opsDiv">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      operatorState.map(cv => {
        return (
          <OperatorButton
            className="operator"
            ops={cv.char}
            key={cv.char.toString()}
          />
        );
      })}
    </div>
  );
};
export default Operators;
