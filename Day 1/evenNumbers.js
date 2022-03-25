//function to print all even numbers
function printEvenNumbers(maxNum) {
  for(let i = 0; i < maxNum; i++) {
    if(i % 2 == 0) console.log(i);
  }
}

printEvenNumbers(100);