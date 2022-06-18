console.log("This function prints the sum of all numbers in an array \n");

const sumOfArray = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const arr = [1, -2, 12, 13, -22];
const arr2 = [22.22, -34.12, 23, 44, 100.12];

console.log(" Array1 = ", arr);
console.log("Array1 Sum = ", sumOfArray(arr));

console.log("\n");

console.log(" Array2 = ", arr2);
console.log("Array2 Sum = ", sumOfArray(arr2));
