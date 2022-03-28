const reverseArray = (arr) => {

  let i = 0;
  let j = arr.length -1;
  let temp;
  let half = arr.length / 2;

  do {

    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
    if(i > half || j < half) {
      break;
    }

  } while( i != j);

  return arr;

}

const array = [12, 13, 14, 15, 16, 17];
const array2 = [1, 2, 3];

console.log('array : ' + reverseArray(array));

console.log('array2 : ' + reverseArray(array2));