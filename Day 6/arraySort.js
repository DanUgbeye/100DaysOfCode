const sortArray = (arr) => {

  let temp;
  let smallest;

  for(let i = 0; i < arr.length; i++) {
    smallest = i;

    for(let j = i; j < arr.length; j++) {

      //finding the smallest value in the aray
      if(arr[smallest] > arr[j]) {
        smallest = j;
      }      

    }

    //swapping the smallest value to the right position in the array
    if(arr[smallest] < arr[i]) {
      temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }

  }
  return arr;
}

const array = [4, 3, 2, 1, 12, 66, 78, 15, 99, 67.3];
const array2 = [0.1, 2.3, 0.6, 9.6, 5.0]
console.log(sortArray(array));
console.log('\n');
console.log(sortArray(array2));