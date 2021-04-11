// Declaring variables
var generateBtn = document.querySelector("#generate"); // selects the generate button
var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '123456789';
var sym = '!@#$%^&*()_-+=,<>.?/';
var pwdValues = '';
var password = ''
var lower = '';
var upper = '';
var number = '';
var symbol = '';



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
    //Lower prompt
    function setLower(){
        var lowerP = confirm('Lowercase in password: ');
        if(lowerP){
            lower = true;
        } else {
            lower = false;
        };
    };
    //Upper prompt
    function setUpper(){
        var upperP = confirm('Uppercase in password: ');
        if(upperP){
            upper = true;
        } else {
            upper = false;
        }
    };
    //number prompt
    function setNumber(){
        var numberP = confirm('Numbers in password: ');
        if(numberP){
            number = true;
        } else {
            number = false;
        }
    };
    // symbol prompt
    function setSymbol(){
        var symbolP = confirm('Symbols in password: ');
        if(symbolP){
            symbol = true;
        } else {
            symbol = false;
        }
    };
    // adds the password conditions
    function conditionGenerator (){
        if (lower === true) {
            pwdValues += lowerChar;
        } if (upper === true) {
            pwdValues += upperChar;
        } if (number === true) {
            pwdValues += num;
        } if (symbol === true) {
            pwdValues += sym;
        } if (lower === false && upper === false && number === false && symbol === false){
            alert('Nothing was selected');
        } else {
        }
        return pwdValues;
    };
    
        //Password generator
    function generatePassword (length,pwdValues) {
        for (var i=0; i < length; i ++){
            password += pwdValues.charAt(Math.floor(Math.random() * pwdValues.length))
        }
        return password;
    };
    // password writing function
    function writePassword() {
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
    }
    
    


    
    setLength();
    setLower();
    setUpper();
    setNumber();
    setSymbol();
    conditionGenerator();
    generatePassword(length,pwdValues);
    writePassword();
});
