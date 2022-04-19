function generatePassword(){
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let numbers = ['0','1','2','3','4','5','6','7','8','9'];
    let symbols = ['_', '-', '$', '#', '^', '&', '*', '!', '?', '/'];
    let password = "";
    let randLength = Math.floor(Math.random()*(7) + 5);

    while(password.length<randLength){
        for(let i=0; i<randLength/3; i++){
            let index = Math.floor(Math.random() * letters.length);
            password += letters[index];
        }
        for (let j=0; j<randLength/3; j++){
            let index = Math.floor(Math.random() * numbers.length);
            password+=numbers[index];
        }
        for (let k=0; k<randLength/3; k++){
            let index = Math.floor(Math.random() * symbols.length);
            password+=symbols[index];
        }
        if (password.length<randLength){
            let diff = randLength-password.length;
            for(let m=0; m<diff;m++){
                let index = Math.floor(Math.random()*letters.length);
                password+=letters[index];
            }
        }
    }
    //determine if it starts with a number/letter/symbol
    let randNum = Math.floor(Math.random()*3);
    if (randNum === 1){
        if(typeof password.charAt(0)!== 'number'){
            let searchNum = password.search(/\d/);
            searchNum = searchNum.toString();
            password.replace(searchNum, "");
            password = searchNum + password;
        }
        document.querySelector("#writeTo").innerHTML += "<br>The first Char will be a number!";
    }
    else if (randNum === 2){
        if (typeof password.charAt(0)!== 'string'){
            let searchNum;
            while (typeof searchNum === 'number'){
                searchNum = password.search(/\w/g);
            }
            searchNum = searchNum.toString();
            password.replace(searchNum, "");
            password = searchNum + password;
        }
        document.querySelector("#writeTo").innerHTML += "<br>The first Char will be a letter!";
    }
    else{
        if (typeof password.charAt(0)!== 'symbol'){
            let index = Math.floor(Math.random() * symbols.length)
            password = password.slice(0, -1);
            password = symbols[index] + password;
            document.querySelector("#writeTo").innerHTML += "<br>The first Char will be a symbol!";
        }
    }
    console.log(password.length);
    document.querySelector("#writeTo").innerHTML += "<br>" + password;
}
function generate(){
    document.querySelector("#writeTo").innerHTML = "1: ";
    generatePassword();
    document.querySelector("#writeTo").innerHTML += "<br>2: ";
    generatePassword();
    document.querySelector("#writeTo").innerHTML += "<br>3: ";
    generatePassword();
    document.querySelector("#writeTo").innerHTML += "<br>4: ";
    generatePassword();
}
