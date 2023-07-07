//Question 1

const string = prompt('Enter a string: ');

function reverseString(string) {

    // empty string
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

const result = reverseString(string);
console.log(result);

//Question 2

function BMI(height, weight){
    let bmi = weight/Math.pow(height, 2);
    return bmi;
    }
    let height = prompt("Enter Height in meters ");
        let weight = prompt("Enter weight in kg ");
          
        
        let bmi = BMI(height, weight);
        
          
        if (bmi < 18.5)
            console.log("You are underweight");
  
        else if (bmi >= 18.5 && bmi < 24.9)
            console.log("You are at a Healthy weight");
  
        else if (bmi >= 24.9 && bmi < 30)
           console.log("You are considered Overweight");
  
        else if (bmi >= 30)
            console.log("You are in the category of Obesity");
		
		
		//Question 3
		
		const str = prompt("Enter string ");
		
		function capitalizeWords(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

const result1 = capitalizeWords(str);

console.log(result1);