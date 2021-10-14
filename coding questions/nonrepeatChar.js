//How do you print the first non-repeated character from a string?

console.log("***print the first non-repeated character from a string***")
function firstNonRepeatedCharacter(string) {
for (var i = 0; i < string.length; i++) {
  var c = string.charAt(i);
      if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
           return c;
 }
}
return null;
                           
}
console.log(firstNonRepeatedCharacter("aabbnnmj"))

console.log("---------------------------------------------")