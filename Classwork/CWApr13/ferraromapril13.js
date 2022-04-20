function myPassword(numChar){
	myArray = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
	var password="";
	for (var i=0; i<numChar; i++){
		var randomNum = Math.floor(Math.random()*26);
		password += myArray[randomNum];

	}
	document.write("Your password is " + numChar + " characters long.")
	document.write("<br>" + password.toUpperCase());
}