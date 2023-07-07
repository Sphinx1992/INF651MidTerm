//Question 1

const number = 9;

const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);


//Question 2
const number2 = prompt("Choose a number ");
let isPrime = true;

// if input equals 1, then an invalid message appears
if (number2 === 1) {
    console.log("1 is neither a prime nor a composite number, which makes it invalid.");
}

// check to see if input is greater than 1, which allows function to proceed
else if (number2 > 1) {

    
    for (let i = 2; i < number; i++) {
        if (number2 % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number2} is a prime number`);
    } else {
        console.log(`${number2} is a not prime number`);
    }
}

// if input is less than 1, then invalid message appears
else {
    console.log("This is an invalid number.");
}


//Question 3

let max = 20;
let min = 4;
const a = Math.floor(Math.random() * (max - min)) + min;
console.log(`Random value between 4 and 20 is ${a}`);
