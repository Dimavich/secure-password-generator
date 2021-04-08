// Assignment Code
var generateBtn = document.querySelector("#generate"); // selects the generate button


//Password function 
var generatorFunction = {
  lower: getLower, 
  upper: getUpper,
  number: getNumber,
  symbol: getSymbol
};



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


// PORMPTS
// password length prompt
function pwLength () {
  var length = prompt('Passowrd Length (it must be from 8-128 characters long): ');
  if (length > 128) {
    alert ('Too High')
    pwLength();
  } else if (length < 8) {
    alert('Too low');
    pwLength();
  } else {
    var passowdLength = length;
  }
};

//Lower Case Prompt
function lowerCase () {
  var lowerCaseP = prompt('Do you want lower case letter in the password (Y/N) ');
  if (lowerCaseP === 'N') {
    lowerCaseP= false;
  } else if (lowerCaseP === 'Y') {
    lowerCaseP= true;
  } else {
    alert ('Please answer with a Y or a N')
    lowerCase();
  }
};

//Upper case prompt
function upperCase () {
  var upperCaseP = prompt('Do you want upper case letter in the password (Y/N) ');
  if (upperCaseP === 'N') {
    upperCaseP = false;
  } else if (upperCaseP === 'Y') {
    upperCaseP= true;
  } else {
    alert ('Please answer with a Y or a N')
    upperCase();
  }
};

//number prompt
function numberCase () {
  var numberCaseP = prompt('Do you want lower case letter in the password (Y/N) ');
  if (numberCaseP === 'N') {
    numberCaseP = false;
  } else if (numberCaseP === 'Y') {
    numberCaseP = true;
  } else {
    alert ('Please answer with a Y or a N')
    numberCase();
  }
};

//symbol prompt
function symbolCase () {
  var symbolCaseP = prompt('Do you want symbols in the password (Y/N) ');
  if (symbolCaseP === 'N') {
    symbolCaseP = false;
  } else if (symbolCaseP === 'Y') {
    symbolCaseP = true;
  } else {
    alert ('Please answer with a Y or a N')
    symbolCase();
  }
};

pwLength();
lowerCase();
upperCase();
symbolCase();
numberCase();

//SELECTOR FUNCTION




// Write password to the #password input
function writePassword() {                // function to write out the generated password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // activates when you click on the generate password button








 
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