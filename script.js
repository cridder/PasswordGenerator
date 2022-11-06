// Assignment code here

//  [ ] WHEN I click the button to generate a password
//    [ ] THEN I am presented with a series of prompts for password criteria

//  [ ] WHEN prompted for password criteria
//    [ ] THEN I select which criteria to include in the password

// function
function getLength(getInput, string) {
  var getInput = null;
  do {
    getInput = prompt(string);
  } while (isNaN(getInput) || getInput < 8 || getInput > 128);
  var pwLength = parseInt(getInput);
  console.log("getLength getInput type is a: " + typeof getInput);
  console.log("getLength getInput is : " + getInput);
  return getInput;
}

// function
function getCharacterSets(getInput, string) {
  var getInput = null;
  var pwYES = 'YES';
  var pwNO = 'NO';
  do {
    getInput = prompt(string);
    } while (!(getInput === pwYES) && !(getInput === pwNO));
    console.log("");
    console.log("getCharacterSets getInput is : " + getInput);
    console.log("");
    return getInput;
}

// START FUNCTION
function generatePassword() {
  
// GET LENGTH OF PASSWORD  
var pwLengthInput = null; 
  do {
    pwLengthInput = prompt("\nLength of password?\n \nEnter a number!\n \n8 character minimum\n \n128 character maximum\n");
    } while (isNaN(pwLengthInput) || pwLengthInput < 8 || pwLengthInput > 128);
    // convert input to a number
    var pwLength = parseInt(pwLengthInput);
    console.log("pwLength type is a: " + typeof pwLength);
    console.log("pwLength is : " + pwLength);
  

// GET LOWERCASE ANSWER
  var pwLowercaseInput = null;
  var pwLowercaseInput = getCharacterSets(pwLowercaseInput,"\nInclude lowercase characters in password?\n \nYES or NO?\n");
  console.log("");
  console.log("pwLowercaseInput is : " + pwLowercaseInput);
  console.log("");

// GET UPPERCASE ANSWER
  var pwUppercaseInput = null;
  var pwUppercaseInput = getCharacterSets(pwUppercaseInput,"\nInclude lowercase characters in password?\n \nYES or NO?\n");
  console.log("");
  console.log("pwUppercaseInput is : " + pwUppercaseInput);
  console.log("");

// GET NUMERIC ANSWER
  var pwNumericInput = null;
  var pwNumericInput = getCharacterSets(pwNumericInput,"\nInclude lowercase characters in password?\n \nYES or NO?\n");
  console.log("");
  console.log("pwNumericInput is : " + pwNumericInput);
  console.log("");


// GET SPECIAL ANSWER
var pwSpecialInput = null;
var pwSpecialInput = getCharacterSets(pwSpecialInput,"\nInclude lowercase characters in password?\n \nYES or NO?\n");
console.log("");
console.log("pwSpecialInput is : " + pwSpecialInput);
console.log("");  


const arSpecial = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

const arUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const arLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const arNumeric = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128"]





// //  [X] WHEN asked for character types to include in the password
// //    [X] THEN I confirm whether or not to include lowercase
// // https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip
// // LOWERCASE
// var pwLowercaseInput = null; 
// var pwYES = 'YES'; 
// var pwNO = 'NO'; 
// do {
//   pwLowercaseInput = prompt("\nInclude lowercase characters in password?\n \nYES or NO?\n");
// } while (!(pwLowercaseInput === pwYES) && !(pwLowercaseInput === pwNO));
// // get YES or NO
// console.log("");
// console.log("pwLowercaseInput is : " + pwLowercaseInput);
// console.log("");


//  [X] WHEN asked for character types to include in the password
//    [X] THEN I confirm whether or not to include uppercase
// UPPERCASE
// var pwUppercaseInput = null; 
// do {
//   pwUppercaseInput = prompt("\nInclude uppercase characters in password?\n \nYES or NO?\n");
// } while (!(pwUppercaseInput === pwYES) && !(pwUppercaseInput === pwNO));
// console.log("");
// console.log("pwUppercaseInput is : " + pwUppercaseInput);
// console.log("");

//  [X] WHEN asked for character types to include in the password
//    [X] THEN I confirm whether or not to include numeric
// NUMERIC
// var pwNumericInput = null; 
// do {
//   pwNumericInput = prompt("\nInclude numeric characters in password?\n \nYES or NO?\n");
// } while (!(pwNumericInput === pwYES) && !(pwNumericInput === pwNO));
// console.log("");
// console.log("pwNumericInput is : " + pwNumericInput);
// console.log("");

//  [X] WHEN asked for character types to include in the password
//    [X] THEN I confirm whether or not to include special characters
// SPECIAL CHARACTERS
// var pwSpecialInput = null; 
// do {
//   pwSpecialInput = prompt("\nInclude special characters in password?\n \nYES or NO?\n");
// } while (!(pwSpecialInput === pwYES) && !(pwSpecialInput === pwNO));
// console.log("");
// console.log("pwSpecialInput is : " + pwSpecialInput);
// console.log("");

//  [ ] WHEN I answer each prompt
//    [ ] THEN my input should be validated and at least one character type should be selected

// CREATE A FUNCTION THAT CHECKS TO SEE WHAT TYPE OF CHARACTERS ARE WANTED, AT LEAST ONE






}
// END FUNCTION






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
