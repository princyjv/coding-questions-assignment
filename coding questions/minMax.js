// 3.How do you find the largest and smallest number in an unsorted integer array ?
console.log("find the largest and smallest number in an unsorted integer array")

const intArr = [112, 24, 31, 44, 101, 203, 33, 56];
const findMaxMin = (intArr) => {
let max = intArr[0];
let min = intArr[0];
for(let i = 0; i < intArr.length; i++) {
  if(intArr[i] > max) {
     max = intArr[i];
  }
  else if (intArr[i] < min) {
     min = intArr[i];
  }
};
return {
  min, max
};
};
console.log(findMaxMin(intArr));
console.log("---------------------------------------------")