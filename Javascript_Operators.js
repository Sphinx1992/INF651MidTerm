//Question 1

let a = 10;
let b = 3;
let myRemainder = a%b;

console.log(`The value is ${myRemainder}`);

//the value is 1


//Question 2
let number = prompt("Enter a number ");
	let low = 20;
	let high = 50 ;

function isInRange() {
	
  if (number > low && number < high) {
    return true;
  } else {

  return false;
}
}

console.log(isInRange(number, low, high));


//Question 3

let x = 5;
let y = 3;
let z = 2;

let value = eval(new String(x > y || z < y && x === z));
    console.log(value);




