const sumOfArray = (array) => {
  
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;

}

const arr = [1, -2, 12, 13, -22];
const arr2 = [22.22, -34.12, 23, 44, 100.12];

console.log(sumOfArray(arr2));