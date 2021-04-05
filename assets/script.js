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
    //beginning question for the user to start the process
    enter = userInt(prompt("How many characters would you like to have in your password? Please choose bettwn 8 and 128"));

    if(!enter) {
        alert("This needs a value.");
    } else if(enter < 8 || enter > 128) {
        enter = userInt(prompt("You need to choose characters between 8 and 128"));
    
    } else {
        confirmLowercase = confirm("Will it contain lowercase letters?");
        confirmNumber = confirm("Will it contain numbers?");
        confirmUppercase = confirm("Will it conain Uppercase letters?");
        confirmCharacter = confirm("Will it contain special characters?");
    };

    // if else: if the user doest not choose any of the options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    // Else if statement of the four options below are true
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpahbet, alphabetDos);
    }
    // else if the statement of the three option below are true
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alphabetDos);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpahbet);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpahbet, alphabetDos);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpahbet, alphabetDos);
    }
    // Else if the statments of the two options below are true
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpahbet);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alphabetDos);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alphabetDos);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alphabetDos);
    }
    // Else if the statments of the one option below is true
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);