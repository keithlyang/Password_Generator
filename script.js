// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var length;
var lowerCase;
var upperCase;
var numbers;
var specialCharacters;
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharactersArray = ["!", " ” ", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\ ", "]", "^", "_", "`", "{", "|", "}", "~"];
var useableCharactersArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

 function passwordLengthCheck(i) {
   if (i >= 8 && i <= 128) {
     length = i;
    } else {
       writePassword();
     }
   }

function correct(){
  lowerCase = confirm("Do you want to have lowercase?");
  upperCase = confirm("Do you want to have uppercase?");
  numbers = confirm("Do you want to have numbers?");
  specialCharacters = confirm("Do you want to have special characters?");
  console.log(lowerCase, upperCase, numbers, specialCharacters)

  if (lowerCase == false && upperCase == false && numbers == false && specialCharacters == false) {
    correct();
  } else {

    if (lowerCase == true) {
      useableCharactersArray = useableCharactersArray.concat(lowerCaseArray);
      console.log(useableCharactersArray);
    }
    if (upperCase == true) {
      useableCharactersArray = useableCharactersArray.concat(upperCaseArray);
      console.log(useableCharactersArray);
    }
    if (numbers == true) {
      useableCharactersArray = useableCharactersArray.concat(numbersArray);
      console.log(useableCharactersArray);
    }
    if (specialCharacters == true) {
      useableCharactersArray = useableCharactersArray.concat(specialCharactersArray);
      console.log(useableCharactersArray);
    }
  }
}


function generatePassword(){
  passwordLength = prompt("Password must be between 8 to 128 characters.");
  passwordLengthCheck(passwordLength);
  correct();
  var generatePassword = [];
    for (var i = 0; i < passwordLength; i++) {
      generatePassword = generatePassword + useableCharactersArray[Math.floor(Math.random()* useableCharactersArray.length)];
    }
  return generatePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);