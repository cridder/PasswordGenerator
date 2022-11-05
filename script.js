// Assignment code here

//  [ ] WHEN I click the button to generate a password
//    [ ] THEN I am presented with a series of prompts for password criteria

//  [ ] WHEN prompted for password criteria
//    [ ] THEN I select which criteria to include in the password

// Special Characters
// "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// START FUNCTION
function generatePassword() {

//  [X] WHEN prompted for the length of the password
//    [X] THEN I choose a length of at least 8 characters and no more than 128 characters
// https://www.reddit.com/r/javascript/comments/196ahg/can_anyone_help_with_validation_of_prompt_within/
var pwLengthInput; 
do {
  pwLengthInput = prompt("\nLength of password?\n \nEnter a number!\n \n8 character minimum\n \n128 character maximum\n");
} while (isNaN(pwLengthInput) || pwLengthInput < 8 || pwLengthInput > 128);
// convert input to a number
var pwLength = parseInt(pwLengthInput);
console.log("pwLength type is a: " + typeof pwLength);
console.log("pwLength is : " + pwLength);


//  [ ] WHEN asked for character types to include in the password
//    [ ] THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip

var pwLowercaseInput; 
var pwYES = 'YES'; 
var pwNO = 'NO'; 
do {
  pwLowercaseInput = prompt("\nInclude lowercase characters in password?\n \nYES or NO?\n");
  console.log(pwLowercaseInput);
  pwLowercaseInput = String(pwLowercaseInput);
  console.log(pwLowercaseInput);
  pwLowercaseInput = pwLowercaseInput.toUpperCase();
  console.log(pwLowercaseInput);
} while (!(pwLowercaseInput === pwYES) && !(pwLowercaseInput === pwNO));


// get YES or NO
console.log("");
console.log("");
console.log("pwLowercaseInput type is not a number: " + !isNaN(pwLowercaseInput));
console.log("pwLowercaseInput type is a: " + typeof pwLowercaseInput);
console.log("pwLowercaseInput is : " + pwLowercaseInput);
console.log("");
console.log("");




}
// END FUNCTION




//  [ ] WHEN asked for character types to include in the password
//    [ ] THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

//  [ ] WHEN I answer each prompt
//    [ ] THEN my input should be validated and at least one character type should be selected

//   [ ] WHEN all prompts are answered
//    [ ] THEN a password is generated that matches the selected criteria

//  [ ] WHEN the password is generated
//    [ ] THEN the password is either displayed in an alert or written to the page



// Provided functions below
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
