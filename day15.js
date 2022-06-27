console.log(
  "This function finds the sum of all elements in an array containing really big numbers \n"
);

function aVeryBigSum(array) {
  if (array.length < 1 || array.length > 10)
    throw new Error("array length must be between 1 and 10 !");
  let sum = 0n;
  for (let i = 0; i < array.length; i++) {
    sum += BigInt(array[i]);
  }
  return sum;
}

let array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log("Array =", array);
console.log("sum = ", aVeryBigSum(array));
