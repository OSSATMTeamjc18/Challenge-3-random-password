// Assignment code here

// user inputs into website.
var enter;
var confirmLowercase;
var confirmNumber;
var confirmUppercase;
var confirmCharacter;
//User choice of the alphabet
alpahbet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Special characters that can be use for the password
specialcharacters = ["!", "$", "%", "@", "&", "^", "#"];

// the space will be there to convert the upper case letters to a lowercase letter.
space = [];

//numbers the user can use within the password.
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var decisions;

var toLower = function(x) {
    return x.toLowerCase();
};

alphabetDos = alpahbet.map(toLower);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
    document.getElementById("password")
});


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);