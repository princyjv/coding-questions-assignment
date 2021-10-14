//How do you count a number of vowels and consonants in a given string?
console.log("count a number of vowels and consonants in a given string")
function getCount(words) {
    var words      = (typeof words == 'string') ? words : '',
        count      = re => (words.match(re) || []).length,
        vowels     = count(/[aeiou]/ig),
        consonants = count(/[bcdfghjklmnpqrstvxzwy]/ig);
  
    return {vowels, consonants};
  }
  console.log(getCount("string"))
  
console.log("---------------------------------------------")
