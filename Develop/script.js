// Password Generator Challenge:
// 1. click button to generate new password
// 2. Series of prompts for password criteria: length (8-128), lowercase, uppercase, numeric, and/or special characters. at least one of each
// 3. each input criteria is validated
// 4. generate password once all prompts answered
// 5. password displayed as either an alert or written on the page


// define the characters allowed in the password
// uppercase, lowercase, numbers, and special characters !#$%&'()*+,-./:;<=>?@[}^_`{|}~?"
// generate password from criteria
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", ":", ";", "'", "<", ",", ">", ".", "?", "/", "~", "`", "|"];
var createPW = [];

// look for the "id" in the html, these are unique identifiers for elements
// there is a "password" and "generate" element
// Assignment Code
var generateBtn = document.querySelector("#generate");

// this is a function to write the password text value
// * we need to create a function for "generatePassword()"
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// this is the function to prompt user to generate the password
// prompt for character limit (8-128 characters). if <8, >128, or not a boolean, then invalidate
// use concat to combine arrays to generate the random password, based off the character # the user chooses
function generatePassword() {
  var charLimit = prompt("Password length: please pick the length between 8 to 128 characters.");
  if (charLimit < 8 || charLimit > 128 || isNaN(charLimit) === true) {
    alert("Invalid. Reponse must be a NUMBER between 8 to 128 characters.");
    return "Please choose the length of your password (between 8 to 128 characters)."
  }
  else {
    alert("Your password will have a length of " + charLimit + " characters.")
  }
  var passLower = confirm("Acknowledge: your password will have a minimum of one lowercase letter.");
  if (passLower == false) {
    alert("You have declined to have at least one lowercase letter.");
    return "Your password must have at least one lowercase letter."
  }
  var passUpper = confirm("Acknowledge: your password will have a minimum of one uppercase letter.");
  if (passUpper == false) {
    alert("You have declined to have at least one uppercase letter.");
    return "Your password must have at least one uppercase letter."
  }
  var passNumeric = confirm("Acknowledge: your password will have a minimum of one numeric character.");
  if (passNumeric == false) {
    alert("You have declined to have at least one number.");
    return "Your password must have at least one one number."
  }
  var passSpecial = confirm("Acknowledge: your password will have a minimum of one special character: !#$%&'()*+,-./:;<=>?@[}^_`{|}~?");
  if (passSpecial == false) {
    alert("You have declined to have at least one special character: !#$%&'()*+,-./:;<=>?@[}^_`{|}~?");
    return "Your password must have at least one special character."
  }
  // combine all the arrays with concat
  createPW = createPW.concat(lowerCase, upperCase, numericList, specialChar);
  let createPassword = ""
  for (let i = 0; i < charLimit; i++) {
    let pwd =[Math.floor(Math.random() * createPW.length)];
    createPassword += createPW[pwd];
  }
  return createPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
