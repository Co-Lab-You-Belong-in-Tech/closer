// takes an object and and a setDisabled function, returns true if all values not empty and sets disabled to false

export const objEmptyValidate = (obj: any) => {
  const objValues = Object.values(obj);
  const objEmpty = objValues.some((value) => value === "");
  console.log(objEmpty);
  console.log(objValues);
  console.log(obj);
  return objEmpty;
};
