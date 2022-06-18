console.log("This function takes in 2 arrays of ratings evaluates them and awards points \n");

const awardPoints = (a, b) => {
  let points = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if(a[i] < 1 || a[i] > 100) {
        console.log(`Error: invalid input at a[${i}]`);
        continue;
    }
    if(b[i] < 1 || b[i] > 100) {
        console.log(`Error: invalid input at b[${i}]`);
        continue;
    }
    a[i] > b[i] && points[0]++;
    a[i] < b[i] && points[1]++;
  }
  return points;
};

const P1 = [101, 5, 8, 9];
const P2 = [3, 4, 4, 1];

console.log("Alice ratings: ", P1);
console.log("Bob ratings: ", P2);

console.log("Result: ", awardPoints(P1, P2));
