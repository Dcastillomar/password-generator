// Assignment Code
var generateBtn = document.querySelector("#generate");
//define what the variables of the password are
var special = '!@#$%^&*()';
var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
var numbersOptions = '0123456789';
var passwordLength;
var numbers;
var lowercase;
var uppercase;
var otherCharacters;

// Write password to the #password input
function writePassword() {
  passwordSelector();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var combinedStrings = '';
  var randomPassword = '';


  if (numbers) {
    combinedStrings += numbersOptions;
  }

  if (uppercase) {
    combinedStrings += upperLetters;
  }

  if (lowercase) {
    combinedStrings += lowerLetters;
  }

  if (otherCharacters) {
    combinedStrings += special;
  }

 combinedStrings = combinedStrings.split('');
var randomIndex= Math.floor(Math.random() * combinedStrings.length);


 console.log(combinedStrings[randomIndex])

 //loop


}

//write function for pop up screen for password requirements
function passwordSelector() {
  passwordLength = prompt('Enter the number of characters');

  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt('Password must be between 8-128 characters');
    return null;
  }

  numbers = confirm('Numbers?');
  lowercase = confirm('Lowercase Letters?');
  uppercase = confirm('Uppercase Letters?');
  otherCharacters = confirm('Special Characters?');

 

  //var functionArray = {
    //getNumbers: function () { return combinedStrings.charAt(Math.floor(Math.random() * 128));



    


// Add event listener to generate button


}
generateBtn.addEventListener("click", writePassword);