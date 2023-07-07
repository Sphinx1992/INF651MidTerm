//Question 1

var isRaining = true;
var isSunny = false;
    
    
    var shouldStayInside = isRaining && isSunny;
	
	console.log(shouldStayInside);
	
	
	//Question 2
	
	function hasPermission() {
		
		var isUserLoggedIn = true;
		var isAdmin = true;
		
		if(isUserLoggedIn && isAdmin) {
			
			return true;
			
		} else {
			
			return false;
			
		}
	}
	
	const value = hasPermission();
	
	console.log(value);
	
	
	//Question 3
	
	let str = "Godzilla";
	
	function hasUniqueCharacters(str)
{
     
    // If identical characters appear, then the program returns false
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
 
    // if all charactes are unique, then the program returns true
    return true;
}
 
 const string = hasUniqueCharacters(str);
 
 console.log(string);
 
