// How do you find the missing number in a given integer array of 1 to 100?

console.log("find the missing number in a given integer array of 1 to 100")

function missing(array){
    let missArr= [];

    
    let minNum=Math.min(...array);
    let maxNum=Math.max(...array);
    for( let i=minNum; i<maxNum; i++){
       if(array.indexOf(i)< 0){
           missArr.push(i)
       }
    }
  return missArr;
  }

console.log(missing([1,2,3,5,12,20]))