// 4.How do you find all pairs of an integer array whose sum is equal to a given number?
console.log("Printing all pairs of an array whose sum equals to given number")
function printPairs(arr, n1, sum)
{
    let count = 0; 
   
    for (let i = 0; i < n1; i++)
        for (let j = i + 1; j < n1; j++)
            if (arr[i] + arr[j] == sum)
          
                console.log("(" + arr[i] + ", "
                    + arr[j] + ")" );
}
 
 
    let arr = [ 1, 5, 7, -1, 5 ];
    let n1 = arr.length;
    let sum = 6;
 console.log(printPairs(arr, n1, sum));
   
    console.log("---------------------------------------------")