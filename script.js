// Assignment code here

  //  [X ] WHEN I click the button to generate a password
    //  [X] THEN I am presented with a series of prompts for password criteria

  //  [X] WHEN prompted for password criteria
    //  [X] THEN I select which criteria to include in the password

// START FUNCTION
function arrayconnect(input, str, arDestination, arSource) {
  if  (input === str)
  var arDestination = arDestination.concat(arSource);
  console.log("arDestination is a: " + arDestination);
  return arDestination;
}
// END FUNCTION
// -------------------------------------------------------------------

// START FUNCTION
function getCharacterSets(getInput, string) {
  var getInput = null;
  var pwYES = 'YES';
  var pwNO = 'NO';
  var strYesNo = "YES or NO?"
  var strOneSet = "check CharacterSets FUNCTION\nAt least ONE of these character sets are required:\nLowercase, Uppercase, Numeric, Special!"
  do {
    getInput = prompt(string);
    } while (!(getInput === pwYES) && !(getInput === pwNO));
    console.log("");
    console.log("getCharacterSets getInput is : " + getInput);
    console.log("");
    return getInput;
}
// END FUNCTION
// -------------------------------------------------------------------

// START generatePassword FUNCTION
function generatePassword() {
  //  [X] WHEN prompted for the length of the password
    //  [X] THEN I choose a length of at least 8 characters and no more than 128 characters  
// GET LENGTH OF PASSWORD  
var pwLengthInput = null; 
  do {
    pwLengthInput = prompt("\nLength of password?\n \nEnter a number!\n \n8 character minimum\n \n128 character maximum\n");
    } while (isNaN(pwLengthInput) || pwLengthInput < 8 || pwLengthInput > 128);
    // convert input to a number
    var pwLength = parseInt(pwLengthInput);
    console.log("pwLength type is a: " + typeof pwLength);
    console.log("pwLength is : " + pwLength);
// -------------------------------------------------------------------

var pwYES = 'YES';
var pwNO = 'NO';
var strYesNo = "YES or NO?"
var strOneSet = "checkCharacterSets FUNCTION\nAt least ONE of these character sets are required:\nLowercase, Uppercase, Numeric, Special!"

do {
  //  [X] WHEN asked for character types to include in the password
    //  [X] THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  //  [X] WHEN I answer each prompt
    //  [X] THEN my input should be validated and at least one character type should be selected
// GET LOWERCASE ANSWER
var pwLowercaseInput = null;
var pwLowercaseInput = getCharacterSets(pwLowercaseInput, "\n" + strOneSet + "\nInclude LOWERCASE characters in password?\n" + strYesNo + "\n");
// GET UPPERCASE ANSWER
var pwUppercaseInput = null;
var pwUppercaseInput = getCharacterSets(pwUppercaseInput,"\n" + strOneSet + "\nInclude UPPERCASE characters in password?\n" + strYesNo + "\n");
// GET NUMERIC ANSWER
var pwNumericInput = null;
var pwNumericInput = getCharacterSets(pwNumericInput,"\n" + strOneSet + "\nInclude NUMERIC characters in password?\n" + strYesNo + "\n");
// GET SPECIAL ANSWER
var pwSpecialInput = null;
  var pwSpecialInput = getCharacterSets(pwSpecialInput,"\n" + strOneSet + "\nInclude SPECIAL characters in password?\n" + strYesNo + "\n");
} while ((pwLowercaseInput === pwNO) && (pwUppercaseInput === pwNO) && (pwNumericInput === pwNO) && (pwSpecialInput === pwNO));

  console.log("pwLowercaseInput is a: " + pwLowercaseInput);
  console.log("pwUppercaseInput is a: " + pwUppercaseInput);
  console.log("pwNumericInput is a: " + pwNumericInput);
  console.log("pwSpecialInput is a: " + pwSpecialInput);

// -------------------------------------------------------------------

const arLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const arUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const arNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const arSpecial = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// -------------------------------------------------------------------

  //  [ ] WHEN all prompts are answered
    //  [ ] THEN a password is generated that matches the selected criteria
// CREATE PASSWORD
// create empty array
var arPwSource = [];
// if LOWERCASE is yes then add to array
// arrayconnect(pwLowercaseInput, "YES", arPwSource, arLowerCase)

if  (pwLowercaseInput === "YES") {
  var arPwSource = arPwSource.concat(arLowerCase);
  console.log("arPwSource is a: " + arPwSource);
}

// if UPPERCASE is yes then add to array
// arrayconnect(pwUppercaseInput, "YES", arPwSource, arUpperCase)

if  (pwUppercaseInput === "YES") {
  var arPwSource = arPwSource.concat(arUpperCase);
  console.log("arPwSource is a: " + arPwSource);
}

// if NUMERIC is yes then add to array
// arrayconnect(pwNumericInput, "YES", arPwSource, arNumeric)

if  (pwNumericInput === "YES") {
  var arPwSource = arPwSource.concat(arNumeric);
  console.log("arPwSource is a: " + arPwSource);
}

// if SPECIAL is yes then add to array
// arrayconnect(pwSpecialInput, "YES", arPwSource, arSpecial)

if  (pwSpecialInput === "YES") {
  var arPwSource = arPwSource.concat(arSpecial);
  console.log("arPwSource is a: " + arPwSource);
}

// -------------------------------------------------------------------

  //  [ ] WHEN the password is generated
    //  [ ] THEN the password is either displayed in an alert or written to the page

}
// END generatePassword FUNCTION

// -------------------------------------------------------------------

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
