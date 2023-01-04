// takes an object and and a setDisabled function, returns true if all values not empty and sets disabled to false

import { useState } from "react";

export const useObjEmptyValidate = () => {
  const [disabled, setDisabled] = useState(true);

  const objEmpty = (obj: any) => {
    let empty = false;
    Object.keys(obj).forEach((key) => {
      if (obj[key] === "") {
        empty = true;
      }
    });
    return empty;
  };

  const validate = (obj: any) => {
    if (objEmpty(obj)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return { disabled, validate };
}