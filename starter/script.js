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
  // This function returns a random element from the provided array
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword(options) {
  // This function generates a password based on user input (options)

  // Combine character arrays based on user choices
  var characters = [];
  if (options.lowercase) characters = characters.concat(lowerCasedCharacters);
  if (options.uppercase) characters = characters.concat(upperCasedCharacters);
  if (options.numeric) characters = characters.concat(numericCharacters);
  if (options.special) characters = characters.concat(specialCharacters);

  // Generate password
  var password = '';
  for (var i = 0; i < options.length; i++) {
    password += getRandom(characters);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // This function is the process of getting options, generating a password, and displaying it

  var options = getPasswordOptions(); // Getting user options
  var password = generatePassword(options); // Generating password based on options
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


