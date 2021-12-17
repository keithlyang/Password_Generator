// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("Password must be between 8 to 128 characters.")
  var length;
  var lowerCase;
  var upperCase;
  var numbers;
  var specialCharacters;
  var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialCharactersArray = ["!", " ” ", "#", "$", "%", "&", " ’ ", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\ ", "]", "^", "_", "`", "{", "|", "}", "~"];
  var useableCharactersArray = [];

  passwordText.value = password;

}

function generatePassword(){
  prompt("How many characters would you like your password to contain?")
    if (password >=8) {
      console.log("OK");
    } else ("Password length must be at least 8 characters long.")
    }

    if (password <128) {
      console.log();
    }

  // return ""

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// var input = [2, 34, 5, 67, 44, 101];

// var output = []

// if (input [0] % 2 === 0){
//    output.push("even") 
// } else {
//   output.push("odd")
// }