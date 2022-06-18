console.log("This function finds all the prime numbers under the limit specified \n");

const prime_finder = (limit) => {
    const prime_numbers = [];
    for(let i = 2; i <= limit; i++) {

        for(let j = 1; j < i; j++) {
            if(i % j == 0 && j!== 1) {
                break;
            }
            if(j == i - 1) {
                prime_numbers.push(i)
            }
        }

    }
    return prime_numbers;
}

const limit = 1000;
console.log("Limit is ", limit)
console.log(`Prime numbers under ${limit} :`);
console.log(`${prime_finder(limit)}`);