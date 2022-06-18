console.log("This function reverses the elements in an array \n");

const reverseArray = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  let temp;
  let half = arr.length / 2;

  do {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
    if (i > half || j < half) {
      break;
    }
  } while (i != j);

  return arr;
};

const array = [12, 13, 14, 15, 16, 17];
console.log("Before: Array1 = ", array);
console.log("After: Array1 = ", reverseArray(array));

console.log("\n");

const array2 = [1, 2, 3];
console.log("Before: Array2 = ", array2);
console.log("After: Array2 = ", reverseArray(array2));
