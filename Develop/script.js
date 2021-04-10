// Assignment Code
var generateBtn = document.querySelector("#generate"); // selects the generate button


//Password function 
var generatorFunction = {
  lower: getLower,
  upper: getUpper,
  number: getNumber,
  symbol: getSymbol
};

generateBtn.addEventListener('click', function(){
    //Length prompt
    function setLength(){
        var lengthP = prompt('Input length of password: ');
        if (lengthP < 8 ){
            alert('Too low')
            setLength();
        } else if (lengthP > 128){
            alert('Too high')
            setLength();
        } else {
            length = lengthP
            return length;
        }
    };
    //Lower
    function setLower(){
        var lowerP = confirm('Lowercase in password: ');
        if(lowerP){
            lower = true;
        } else {
            lower = false;
        }
    };
    //Upper
    function setUpper(){
        var upperP = confirm('Uppercase in password: ');
        if(upperP){
            upper = true;
        } else {
            upper = false;
        }
    };

    function setNumber(){
        var numberP = confirm('Numbers in password: ');
        if(numberP){
            number = true;
        } else {
            number = false;
        }
    };

    function setSymbol(){
        var symbolP = confirm('Symbols in password: ');
        if(symbolP){
            symbol = true;
        } else {
            symbol = false;
        }
    };


    
    setLength();
    setLower();
    setUpper();
    setNumber();
    setSymbol();
});


// generating functions
function getLower(){
  return String.fromCharCode (Math.floor(Math.random() * 26) + 97);
}

function getUpper(){
  return String.fromCharCode (Math.floor(Math.random() * 26) + 65);
}

function getNumber(){
  return String.fromCharCode (Math.floor(Math.random() * 10) + 48);
}

function getSymbol (){
  var symbols = '!@#$%^&*()-_=+,./<>?;'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Write password to the #password input
function writePassword() {                // function to write out the generated password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword); // activates when you click on the generate password button









// TO GENERATE PASSWORD I NEED:
// #a function that uses math to generate a random number that is assigned to a lowecase latter of the alphabet
// #a function that uses math to generate random uppercase letters 
// #a function to generate random numbers from 1-9
// a# function to generate a number of special charecters 
// a function that sets the password length to what the user input on the prompt 8-128
// a way to select what i want and dont want in my generated passwords
// validate that at least one of the generating functions is selected
// a function to generate the password and that it matches my selected criteria
// display the password in the textfield  