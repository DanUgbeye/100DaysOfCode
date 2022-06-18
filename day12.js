console.log("This function checks if a string has only unique characters \n");

const unique_characters = (string) => {
    let uniqueCharacters = [];
    for(let i = 0; i < string.length; i++) {
        if(uniqueCharacters.includes(string[i])) return false;
        uniqueCharacters.push(string[i]);
    }
    return true;
}

const text = "anything"
console.log("checking string : ", text)
console.log("Result is: ", unique_characters(text));