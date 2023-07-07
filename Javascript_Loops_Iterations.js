//Question 1

let num = 1;
		while(num<=20){
			console.log(num++);
		}
		
		
		//Question 2
		
		const number = prompt('Enter a positive integer: ');

let sum = 0;


for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of all numbers from 1 to n is: ', sum);


//Question 3

function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}


console.log(factorialize(15));
