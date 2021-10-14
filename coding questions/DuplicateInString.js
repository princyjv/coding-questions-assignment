
//How do you print duplicate characters from a string
console.log("print duplicate characters from a string")
function howManyRepeated(str){
    const result = [];
    const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    
    if (strArr != null) {
      strArr.forEach((elem) => {
        result.push(elem[0]);
      });
    }
    return result;
  }
  console.log(...howManyRepeated("array"));
  

  console.log("---------------------------------------------")
