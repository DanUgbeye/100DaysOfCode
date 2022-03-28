const kilometerToMile = (km) => {

  const convFactor = 0.6213712;
  return (km * convFactor);

} 

const mileToKilometer = (miles) => {

  const convFactor = 1.609344;
  return (miles * convFactor);

} 

//this should still give approx 101 as answer because we are converting to mile and then back to kilometer
console.log(mileToKilometer(kilometerToMile(101)));

console.log(`101 miles = ${mileToKilometer(101)} kilometers`);
console.log(` 101 kilometers = ${kilometerToMile(101)} miles`);
