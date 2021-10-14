//How do you reverse words in a given sentence without using any in-built method?
console.log("reverse words in a given sentence without using any in-built method")
function reverseStr(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}
console.log(reverseStr('hello'));

console.log("---------------------------------------------")