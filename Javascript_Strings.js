//Question 1

let text = "Hello World!";
let uppercaseString = text.toUpperCase();

console.log(uppercaseString);


//Question 2

function countVowels(str)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str.length ; x++)
  {
    if (vowel_list.indexOf(str[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(countVowels("I have to go to the store"));


//Question 3

truncateString = function(str1, length, ending) {
    if (length == null) {
      length = 200;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str1.length > length) {
      return str1.substring(0, length - ending.length) + ending;
    } else {
      return str1;
    }
  };
console.log(truncateString('I am going to the moon.'))
console.log(truncateString('I am going to the moon.',14))
