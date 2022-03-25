const kilometerToMile = (km) => {

  const convFactor = 0.6213712;
  return (km * convFactor);

} 

const mileToKilometer = (miles) => {

  const convFactor = 1.609344;
  return (miles * convFactor);

} 

console.log(mileToKilometer(kilometerToMile(101)));

console.log(kilometerToMile(101));
