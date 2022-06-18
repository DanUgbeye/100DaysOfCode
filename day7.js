console.log("This function filters out the negative numbers in  the array \n");

const filterNegative = (arr) => {

  const newArr = arr.filter( number => number >= 0);
  return newArr;

}

const arr = [1, -2, -4, 5, 2, 10, -19];
console.log("Before: ", arr)


console.log("After: ", filterNegative(arr));