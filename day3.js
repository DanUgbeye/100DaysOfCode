console.log("This function converts from kilometer to mile and vice versa \n");

const kilometerToMile = (km) => {
  const convFactor = 0.6213712;
  return km * convFactor;
};

const mileToKilometer = (miles) => {
  const convFactor = 1.609344;
  return miles * convFactor;
};

//output below should still give approx 101 as answer
// console.log(mileToKilometer(kilometerToMile(101)));

console.log(` 101 miles to kilometers = ${mileToKilometer(101)} kilometers`);
console.log(` 101 kilometers to miles = ${kilometerToMile(101)} miles`);
