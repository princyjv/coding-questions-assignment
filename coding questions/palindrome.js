


   // How do you check if a given string is a palindrome?
 
   console.log(" check if a given string is a palindrome")
    function palindrome(str) 
{
    var palin = str.split("").reverse().join("");

    if (palin === str){
        return true;
    } else {
        return false;
    }
}   

console.log(palindrome("eye"));
console.log(palindrome("Race car"));
console.log("---------------------------------------------")