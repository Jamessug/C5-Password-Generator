// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Function to prompt user for password options
function getPasswordOptions() {

  // Helper function to validate input
  function isValidInput(input, type) {
    // This function checks if the provided input is valid based on the specified type
    switch (type) {
      case 'length':
        // For password length, it checks if the input is a number between 8 and 128
        return !isNaN(input) && parseInt(input) >= 8 && parseInt(input) <= 128;
      case 'character':
        // For character types, it checks if the input is either 'Y' or 'N'
        return input.toLowerCase() === 'y' || input.toLowerCase() === 'n';
      default:
        // Default case, returns false for any other type
        return false;
    }
  }

  // Prompt for password length
  var passwordLength;
  do {
    // Keep prompting until a valid password length is entered
    passwordLength = prompt('Enter the length of the password (between 8 and 128 characters):');
  } while (!isValidInput(passwordLength, 'length'));

  // Prompt for character types
  var includeLowercase = isValidInput(prompt('Include lowercase characters? (Y/N)'), 'character') && prompt('Include lowercase characters? (Y/N)').toLowerCase() === 'y';
  var includeUppercase = isValidInput(prompt('Include uppercase characters? (Y/N)'), 'character') && prompt('Include uppercase characters? (Y/N)').toLowerCase() === 'y';
  var includeNumeric = isValidInput(prompt('Include numeric characters? (Y/N)'), 'character') && prompt('Include numeric characters? (Y/N)').toLowerCase() === 'y';
  var includeSpecial = isValidInput(prompt('Include special characters? (Y/N)'), 'character') && prompt('Include special characters? (Y/N)').toLowerCase() === 'y';

  // Store user choices in an object
  var passwordOptions = {
    length: parseInt(passwordLength),
    lowercase: includeLowercase,
    uppercase: includeUppercase,
    numeric: includeNumeric,
    special: includeSpecial
  };

  return passwordOptions;
}


// Function for getting a random element from an array
function getRandom(arr) {
  // how do we get a random item from this array
  // generate random number 
  var randomNum = Math.random() //mulitply by size of array
  arr[0]

}

// Function to generate password with user input
function generatePassword() {
  // ask the questions
  getPasswordOptions();

  // genererate password


}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// // Your application must:

// Generate a password when the button is clicked.

// Present a series of prompts for password criteria:

// Length of password:

// At least 8 characters but no more than 128.

// Character types:

// Lowercase

// Uppercase

// Numeric

// Special characters ($@%&*, etc.)

// Code should validate for each input and at least one character type should be selected.

// Once all prompts are answered, the password should be generated and displayed in an alert or written to the page.

