console.log("This function return the number of vowels in a string \n");

const noVowels = (string) => {
  let vowels = 0;
  string.toLowerCase().foreach((letter) => {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      vowels++;
    }
  });

  return vowels;
};

const text = "I am a realy good developer, I MEAN IT!";
console.log("Before: ", text);

console.log("After: ", noVowels(text));
