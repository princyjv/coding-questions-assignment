//How are duplicate characters found in a string?
console.log("Duplicate characters found in a string")
     var str = 'abcabc123123';
var REPEATED_CHARS_REGEX = /(.).*\1/gi;

console.log( str.match(REPEATED_CHARS_REGEX) ); // => ['abca', '1231']

console.log("---------------------------------------------")

