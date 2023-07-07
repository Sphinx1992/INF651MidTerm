
//Question 1

//The code's syntax error is var number should be var Number

var Number = 10;
console.log (Number + 5);

//Question 2

const number = prompt("Enter a number: ");

function isEven();

// if the number is even
if(number % 2 == 0) {

return true; }	
{
    console.log("The number is even.");
}

// if the number is odd
else {
	
return false; }

{
console.log("The number is odd."); }
	
	
	//Question 3
	
	
function isPalindrome(string) {

    // length of string is found
    const len = string.length;

    // half of the string goes through a loop
    for (let i = 0; i < len / 2; i++) {

        // checks if first and last string are the same
        if (string[i] !== string[len - 1 - i]) {
			
            return false;
        }
    
	else {
		
    return true;
}

// user inputs a string to test
const string = prompt('Enter a string: ');

// function to determine palindrome of string is called
const value = isPalindrome(string);

console.log(value);




const number = 9;

const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);