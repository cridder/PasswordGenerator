// Assignment code here

//  [ ] WHEN I click the button to generate a password
//    [ ] THEN I am presented with a series of prompts for password criteria

//  [ ] WHEN prompted for password criteria
//    [ ] THEN I select which criteria to include in the password

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

// START FUNCTION
// function checkCharacterSets() {
//   var pwYES = 'YES';
//   var pwNO = 'NO';
//   var strYesNo = "YES or NO?"
//   // var strOneSet = "checkCharacterSets FUNCTION\nAt least ONE of these character sets are required:\nLowercase, Uppercase, Numeric, Special!"
//   var strOneSet = " 21341231251512155215155 "
//   do {
//       // [X] WHEN asked for character types to include in the password
//       // [X] THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//     // GET LOWERCASE ANSWER
//     var pwLowercaseInput = null;
//     var pwLowercaseInput = getCharacterSets(pwLowercaseInput, "\n" + strOneSet + "\nInclude LOWERCASE characters in password?\n" + strYesNo + "\n");
//     // GET UPPERCASE ANSWER
//     var pwUppercaseInput = null;
//     var pwUppercaseInput = getCharacterSets(pwUppercaseInput,"\n" + strOneSet + "\nInclude UPPERCASE characters in password?\n" + strYesNo + "\n");
//     // GET NUMERIC ANSWER
//     var pwNumericInput = null;
//     var pwNumericInput = getCharacterSets(pwNumericInput,"\n" + strOneSet + "\nInclude NUMERIC characters in password?\n" + strYesNo + "\n");
//     // GET SPECIAL ANSWER
//     var pwSpecialInput = null;
//       var pwSpecialInput = getCharacterSets(pwSpecialInput,"\n" + strOneSet + "\nInclude SPECIAL characters in password?\n" + strYesNo + "\n");
//     } while ((pwLowercaseInput === pwNO) && (pwUppercaseInput === pwNO) && (pwNumericInput === pwNO) && (pwSpecialInput === pwNO));
// }
// END FUNCTION

// -------------------------------------------------------------------

// START generatePassword FUNCTION
function generatePassword() {
  
  // [X] WHEN prompted for the length of the password
    // [X] THEN I choose a length of at least 8 characters and no more than 128 characters  
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
  // [X] WHEN asked for character types to include in the password
  // [X] THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
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





// -------------------------------------------------------------------
  console.log("pwLowercaseInput is a: " + pwLowercaseInput);
  console.log("pwUppercaseInput is a: " + pwUppercaseInput);
  console.log("pwNumericInput is a: " + pwNumericInput);
  console.log("pwSpecialInput is a: " + pwSpecialInput);

const arSpecial = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

const arUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const arLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



  // [ ] WHEN I answer each prompt
    // [ ] THEN my input should be validated and at least one character type should be selected

//   [ ] WHEN all prompts are answered
//    [ ] THEN a password is generated that matches the selected criteria

//  [ ] WHEN the password is generated
//    [ ] THEN the password is either displayed in an alert or written to the page


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



// START FUNCTION
// function getLength(getInput, string) {
//   var getInput = null;
//   do {
//     getInput = prompt(string);
//   } while (isNaN(getInput) || getInput < 8 || getInput > 128);
//   // var getInput = parseInt(getInput);
//   // console.log("getLength getInput type is a: " + typeof getInput);
//   // console.log("getLength getInput is : " + getInput);
//   return getInput;
// }
// END FUNCTION


// const arNumeric = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128"]
