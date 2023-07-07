//Question 1

let number = prompt("Enter a number ");

if(number > 0) {
 console.log(`This number is positive.`); 

} else if(number==0) {
	console.log(`This number is Zero`);
	
} else {
	console.log(`This is a negative number`);
}


//Question 2

let num = prompt("Enter sale price ");

function getDiscount() {
	
	if(num > 100) {
		
	return num - (num*(1*.1));
	
}
else if(num <= 100) {
	
	
		return num - (num*(1*.05));
	
}

}

console.log(getDiscount(num));


//Question 3


let year = prompt("Enter a year: ");
if (year % 400 == 0) {
    console.log(`${year}, is a Leap Year`);
}

	else if(year % 100 == 0) {
    console.log(`${year},is not a Leap Year`);
}

else if(year % 4 == 0) {
    console.log(`${year}, is a Leap Year`);
}

else {
	console.log(`This is not a leap Year`);
}