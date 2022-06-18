console.log("This function finds the product of other elements excluding that element in an array \n");

const product_of_the_others = (arr) => {
  let total_product = 1;
  arr.map((element) => {
    total_product *= element;
  });

  arr.forEach((element, index) => {
    arr[index] = total_product / element;
  });

  return arr;
};

const array = [1, 2, 3, 4, 5];
console.log("input array1: ", array);
console.log("Product of the others array is: ", product_of_the_others(array));

console.log("");

const array2 = [5, 5, 5];
console.log("input array2: ", array2);
console.log("Product of the others array is: ", product_of_the_others(array2));
