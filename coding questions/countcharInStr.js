//How do you count the occurrence of a given character in a string?
console.log("count the occurrence of a given character in a string")
let givenStr = "Hello world !!";
    
    let ch = 'l';
    let count = 0;
    
    for(let i = 0; i<givenStr.length; i++){
      if(givenStr.charAt(i) == ch){
        count ++;
      }
    }
    
    console.log("Total occurrence : " +count);
    console.log("---------------------------------------------")