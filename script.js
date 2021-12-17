// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

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