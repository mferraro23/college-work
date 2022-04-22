function myPassword(numChar){
	let myArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
	let password = "";
	for (let i=0; i<numChar; i++){
		const randomNum = Math.floor(Math.random() * 26);
		password += myArray[randomNum];

	}
	document.write("Your password is " + numChar + " characters long.")
	document.write("<br>" + password.toUpperCase());
}