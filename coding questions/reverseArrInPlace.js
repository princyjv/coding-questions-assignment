// How do you reverse an array in place in JavaScript? In place means you cannot create a new array. You have to update the original array.

console.log("Reverse an array in place, means you cannot create a new array. You have to update the original array");
function reverseArrayInPlace(array) {

    for (var z = 0; z < Math.floor(array.length / 2); z++) {

        var temp = array[z];
        array[z] = array[array.length-1-z];
        array[array.length-1-z] = temp;

    }

    return array;
}
console.log(reverseArrayInPlace([1,9,10]))

console.log("---------------------------------------------")