//function to print all even numbers in a given range
console.log("This function prints all even numbers in a given range \n");

function printEvenNumbers(maxNum) {
  for(let i = 0; i < maxNum; i++) {
    if(i % 2 == 0) console.log(i);
  }
}

console.log(" Range is 100 \n Printing all even number before 100 ")
printEvenNumbers(100);