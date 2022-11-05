// Assignment code here

// - [ ] WHEN I click the button to generate a password
// - [ ] THEN I am presented with a series of prompts for password criteria

// Special Characters
// "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// main function
function userPrompts() {
// - [ ] WHEN prompted for the length of the password
// - [ ] THEN I choose a length of at least 8 characters and no more than 128 characters
  var pwLength = 0;
  console.log("pwLength is a: " + typeof pwLength);
  console.log("pwLength is a: " + !(typeof pwLength === "number"));
  console.log("pwLength is a: " + (pwLength < 8 || pwLength > 128));

  // if pwLength is not a number, less than 8, greater than 128, ask again
  if (!(typeof pwLength === "number") && (pwLength < 8 && pwLength > 128)) {
    pwLength = prompt("Length of password?");
  }
  console.log(pwLength);
}

// - [ ] WHEN prompted for password criteria
//     - [ ] THEN I select which criteria to include in the password
// - [ ] WHEN prompted for the length of the password
//     - [ ] THEN I choose a length of at least 8 characters and no more than 128 characters
// - [ ] WHEN asked for character types to include in the password
//     - [ ] THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// - [ ] WHEN I answer each prompt
//     - [ ] THEN my input should be validated and at least one character type should be selected
// - [ ] WHEN all prompts are answered
//     - [ ] THEN a password is generated that matches the selected criteria
// - [ ] WHEN the password is generated
//     - [ ] THEN the password is either displayed in an alert or written to the page


// run main function
userPrompts();


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
