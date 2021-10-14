//How can a given string be reversed using recursion?

console.log("A given string be reversed using recursion ")

const reverseString = (str) => {
    return str ? reverseString(str.substr(1)) + str[0] : str;
};

console.log(reverseString('hello world!'));


console.log("---------------------------------------------")