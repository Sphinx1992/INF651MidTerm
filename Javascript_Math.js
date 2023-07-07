//Question 1

function numberGenerator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
const randomNumber = numberGenerator(1,10);
 console.log(randomNumber);
 
 
 //Question 2
 
 function calculateFactorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
 else{
  return x * calculateFactorial(x-1);
         
}
console.log(calculateFactorial(15));

}
//Question 3

 function calculatePower(a, n) 
{
   if (n === 0) 
   {
    return 1;
    }
  else 
  {
    return a * calculatePower(a, n-1);
  }
};

console.log(calculatePower(8, 3));