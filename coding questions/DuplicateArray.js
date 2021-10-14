//How do you find the duplicate number on a given integer array?
console.log("  the duplicate number on a given integer array")




function findDuplicates(arrnorm, len) {
    
    var ifPresent = false;
      var al = new Array();
     
        for (var i = 0; i < len - 1; i++) {
            for (var j = i + 1; j < len; j++) {
                if (arrnorm[i] == arrnorm[j]) {
                  if (al.includes(arrnorm[i])) {
                        break;
                    }
     
                    else {
                        al.push(arrnorm[i]);
                        ifPresent = true;
                    }
                }
            }
        }
         if (ifPresent == true) {
     
         console.log(al);
        }
        else{ 
            console.log("No duplicates present in arrays");
        }
        
    }
 
    var arrnorm = [12, 11, 40, 12, 5, 6, 5, 12, 11];
    var n = arrnorm.length;
    



   