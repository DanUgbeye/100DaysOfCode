console.log("This function takes in a list and evaluates the mean and mode \n");

const statsFinder = (arr) => {
  let sum = 0;
  const stats = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  stats[0] = sum;

  let modeObj = {};
  let mode = arr[0];
  let maxOccurence = 1;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (modeObj[current]) {
      modeObj[current]++;
      if (modeObj[current] > maxOccurence) {
        maxOccurence = modeObj[current];
        mode = current;
      }
    } else {
      modeObj[current] = 1;
    }
  }
  stats[1] = mode;
  return stats;
};

let data = [1, 2, 33, 3, 4, 2, 3, 3, 3, 4, 5, 1, 9];
console.log("List is : ", data);
console.log("Stats is ", statsFinder(data));