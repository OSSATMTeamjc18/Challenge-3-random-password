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
    document.getElementById("#password")
});


// Write password to the #password input
function writePassword() {
    //beginning question for the user to start the process
   
    var generateBtn = window.prompt("How many characters would you like to have in your password? Please choose bettwn 8 and 128");

    if(!generateBtn) {
        alert("This needs a value.");
    } else if(generateBtn < 8 || generateBtn > 128) {
        generateBtn = userInt(prompt("You need to choose characters between 8 and 128"));
    
    } else {
        confirmLowercase = confirm("Will it contain lowercase letters?");
        confirmNumber = confirm("Will it contain numbers?");
        confirmUppercase = confirm("Will it conain Uppercase letters?");
        confirmCharacter = confirm("Will it contain special characters?");
    };

    // if else: if the user doest not choose any of the options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        decisions = alert("You must choose a criteria!");

    }
    // Else if statement of the four options below are true
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        decisions = specialcharacters.concat(number, alpahbet, alphabetDos);
    }
    // else if the statement of the three option below are true
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        decisions = specialcharacters.concat(number, alphabetDos);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        decisions = specialcharacters.concat(number, alpahbet);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        decisions = specialcharacters.concat(alpahbet, alphabetDos);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        decisions = number.concat(alpahbet, alphabetDos);
    }
    // Else if the statments of the two options below are true
    else if (confirmCharacter && confirmNumber) {
        decisions = specialcharacters.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        decisions = specialcharacters.concat(alpahbet);

    } else if (confirmCharacter && confirmUppercase) {
        decisions = specialcharacters.concat(alphabetDos);
    }
    else if (confirmLowercase && confirmNumber) {
        decisions = alpahbet.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        decisions = alpahbet.concat(alphabetDos);

    } else if (confirmNumber && confirmUppercase) {
        decisions = number.concat(alphabetDos);
    }
    // Else if the statments of the one option below is true
    else if (confirmCharacter) {
        decisions = specialcharacters;
    }
    else if (confirmNumber) {
        decisions = number;
    }
    else if (confirmLowercase) {
        decisions = alpahbet;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        decisions = space.concat(alphabetDos);
    };

    

  var password = [];

  for (var i = 0; i < enter; i++) {
      var makeDecisions = decisions[Math.floor(Math.random() * decisions.length)];
      password.push(makeDecisions);
  }

  var writePassword = password.join("");

  var passwordText = document.querySelector("#password");
  document.getElementById("#password")

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);