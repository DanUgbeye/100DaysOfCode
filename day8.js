console.log("This function removes the spaces in a string \n");

const removeSpaces = (string) => {
  return string.replaceAll(" ", "");
};

const text = "I am A web Developer";
console.log("Before: ", text);

console.log("After: ", removeSpaces(text));
