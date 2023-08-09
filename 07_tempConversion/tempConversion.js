const convertToCelsius = function(degreeF) {
  let degreeC = (degreeF -32) * (5/9);
  if (!Number.isInteger(degreeC)){
    return +degreeC.toFixed(1);
  }
  return degreeC;
};

const convertToFahrenheit = function(degreeC) {
  let degreeF = (9/5 * degreeC) + 32;
  if (!Number.isInteger(degreeF)){
    return +degreeF.toFixed(1);
  }
  return degreeF;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
