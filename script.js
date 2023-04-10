// Global Variables //
let generateButton = document.querySelector("#generate");

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);

// Single choice arrays
let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let specialCharacters = ["`", "-", "=", "[", "]", "\\", ";", "'", ",", ".", "/", "~", "_", "+", "{", "}", "|", ":", "\"", "<", ">", "?", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "<", ">", "?"];

// Multiple choice arrays
let lowerAndUpper = lowerAlphabet.concat(upperAlphabet);
let lowerAndNumbers = lowerAlphabet.concat(numbers);
let lowerAndSpecial = lowerAlphabet.concat(specialCharacters);
let upperAndNumbers = upperAlphabet.concat(numbers);
let upperAndSpecial = upperAlphabet.concat(specialCharacters);
let numbersAndSpecial = numbers.concat(specialCharacters);
let lowerNumbersSpecial = lowerAlphabet.concat(numbers, specialCharacters);
let upperNumbersSpecial = upperAlphabet.concat(numbers, specialCharacters);
let lowerUpperNumbers = lowerAlphabet.concat(upperAlphabet, numbers);
let lowerUpperSpecial = lowerAlphabet.concat(upperAlphabet, specialCharacters);
let allCharacters = lowerAlphabet.concat(upperAlphabet, numbers, specialCharacters);

// Functions
function generatePassword(){

  // restrict length & input type
  let howManyCharacters = prompt("How many characters would you like your password to be? Please choose between 8 and 128");
  let passwordLength = parseInt(howManyCharacters);
  if(Number.isInteger(passwordLength) && passwordLength != NaN && passwordLength >= 8 && passwordLength <= 128){
    alert("Great choice");
  }
  else {
    alert("Not a valid choice. Abort mission");
    return;
  }
  
  // Let user set password style
  let wantLower = confirm("Would you like lowercase characters in your password? Press OK for Yes or Cancel for No");
  let wantUpper = confirm("Would you like uppercase characters in your password? Press OK for Yes or Cancel for No");
  let wantNumbers = confirm("Would you like numbers in your password? Press OK for Yes or Cancel for No");
  let wantCharacters = confirm("Would you like special characters in your password? Press OK for Yes or Cancel for No");

  // Password generation
  if(wantLower == 0 && wantUpper == 0 && wantNumbers == 0 && wantCharacters == 0){
    alert("You cannot have a password with no characters.");
    return;
  }

  let areYouReady = confirm("Are you ready for your new secure password? To proceed, press OK. To quit, press cancel.");
  let newPassword = "";

  if (areYouReady){
    if(wantLower == 1 && wantUpper == 0 && wantNumbers == 0 && wantCharacters == 0){
      for (let i = 0; i < passwordLength; i++){
        let generatedIndex = Math.floor(Math.random()*lowerAlphabet.length);
        newPassword += lowerAlphabet[generatedIndex];
      }
      return newPassword;
    }
    if(wantLower == 0 && wantUpper == 1 && wantNumbers == 0 && wantCharacters == 0){
      for (let i = 0; i < passwordLength; i++){
        let generatedIndex = Math.floor(Math.random()*upperAlphabet.length);
        newPassword += upperAlphabet[generatedIndex];
      }
      return newPassword;
    }
    if(wantLower == 0 && wantUpper == 0 && wantNumbers == 1 && wantCharacters == 0){
      for (let i = 0; i < passwordLength; i++){
        let generatedIndex = Math.floor(Math.random()*numbers.length);
        newPassword += numbers[generatedIndex];
      }
      return newPassword;
    }
    if(wantLower == 0 && wantUpper == 0 && wantNumbers == 0 && wantCharacters == 1){
      for (let i = 0; i < passwordLength; i++){
        let generatedIndex = Math.floor(Math.random()*specialCharacters.length);
        newPassword += specialCharacters[generatedIndex];
      }
      return newPassword;
    }
    if(wantLower == 1 && wantUpper == 1 && wantNumbers == 0 && wantCharacters == 0){
      for (let i = 0; i < passwordLength; i++){
        let generatedIndex = Math.floor(Math.random()*lowerAndUpper.length);
        newPassword += lowerAndUpper[generatedIndex];
      }
      return newPassword;
    }
    if(wantLower == 1 && wantUpper == 0 && wantNumbers == 1 && wantCharacters == 0){
      for (let i = 0; i < passwordLength; i++){
        let generatedIndex = Math.floor(Math.random()*lowerAndNumbers.length);
        newPassword += lowerAndNumbers[generatedIndex];
      }
      return newPassword;
    }     
    if(wantLower == 1 && wantUpper == 0 && wantNumbers == 0 && wantCharacters == 1){
      for (let i = 0; i < passwordLength; i++){
        let generatedIndex = Math.floor(Math.random()*lowerAndSpecial.length);
        newPassword += lowerAndSpecial[generatedIndex];
      }
      return newPassword;
    }  
    if(wantLower == 0 && wantUpper == 1 && wantNumbers == 1 && wantCharacters == 0){
      for (let i = 0; i < passwordLength; i++){
        let generatedIndex = Math.floor(Math.random()*upperAndNumbers.length);
        newPassword += upperAndNumbers[generatedIndex];
      }
      return newPassword;
    }
    if(wantLower == 0 && wantUpper == 1 && wantNumbers == 0 && wantCharacters == 1){
      for (let i = 0; i < passwordLength; i++){
        let generatedIndex = Math.floor(Math.random()*upperAndSpecial.length);
        newPassword += upperAndSpecial[generatedIndex];
      }
      return newPassword;
    }    
    if(wantLower == 0 && wantUpper == 0 && wantNumbers == 1 && wantCharacters == 1){
      for (let i = 0; i < passwordLength; i++){
        let generatedIndex = Math.floor(Math.random()*numbersAndSpecial.length);
        newPassword += numbersAndSpecial[generatedIndex];
      }
      return newPassword;
    }
    if(wantLower == 1 && wantUpper == 0 && wantNumbers == 1 && wantCharacters == 1){
      for (let i = 0; i < passwordLength; i++){
        let generatedIndex = Math.floor(Math.random()*lowerNumbersSpecial.length);
        newPassword += lowerNumbersSpecial[generatedIndex];
      }
      return newPassword;
    }
    if(wantLower == 0 && wantUpper == 1 && wantNumbers == 1 && wantCharacters == 1){
      for (let i = 0; i < passwordLength; i++){
        let generatedIndex = Math.floor(Math.random()*upperNumbersSpecial.length);
        newPassword += upperNumbersSpecial[generatedIndex];
      }
      return newPassword;
    }
    if(wantLower == 1 && wantUpper == 1 && wantNumbers == 1 && wantCharacters == 0){
      for (let i = 0; i < passwordLength; i++){
        let generatedIndex = Math.floor(Math.random()*lowerUpperNumbers.length);
        newPassword += lowerUpperNumbers[generatedIndex];
      }
      return newPassword;
    }
    if(wantLower == 1 && wantUpper == 1 && wantNumbers == 0 && wantCharacters == 1){
      for (let i = 0; i < passwordLength; i++){
        let generatedIndex = Math.floor(Math.random()*lowerUpperSpecial.length);
        newPassword += lowerUpperSpecial[generatedIndex];
      }
      return newPassword;
    }
    if(wantLower == 1 && wantUpper == 1 && wantNumbers == 1 && wantCharacters == 1){
      for (let i = 0; i < passwordLength; i++){
        let generatedIndex = Math.floor(Math.random()*allCharacters.length);
        newPassword += allCharacters[generatedIndex];
      }
      return newPassword;
    }
  }
  else{
    alert("See you space cowboy")
    return;
  }
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}