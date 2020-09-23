// Assignment Code
var generateBtn = document.querySelector("#generate");
var modal = document.querySelector("#myModal");
var span = document.querySelector(".close");
var passLength = document.querySelector("#passwordLength");
var numericChars = document.querySelector("#includeNumbers");
var lowerCaseChars = document.querySelector("#useLowerCase");
var upperCaseChars = document.querySelector("#useUpperCase");
var specialChars = document.querySelector("#useSpecialChars");
var submitBtn  = document.querySelector("#submitbutton");
var newPassword = document.querySelector("#password");


// Modal
function showModal() {
  modal.style.display="block";
}

function closeModal(){
  modal.style.display="none";
}

span.addEventListener("click", closeModal)
// End Modal 

// Password Generator
function generatePassword() {
  closeModal();
  var symbolicChars = "!@#$%&*";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var randomizedPassword = "";
  var possibleValues = "";

  if (specialChars.checked === true) {
    possibleValues= possibleValues + symbolicChars;
  } 

  if (upperCaseChars.checked === true) {
    possibleValues= possibleValues + upperCaseLetters;
  }

  if (numericChars.checked === true) {
    possibleValues= possibleValues + numbers;
  } 

  if (lowerCaseChars.checked === true) {
    possibleValues= possibleValues + lowerCaseLetters;
  }


for (var i = 0; i < passLength.value;i++){
  randomizedPassword= randomizedPassword + possibleValues.charAt(Math.floor(Math.random() * Math.floor(possibleValues.length-1)));
}
newPassword.value = randomizedPassword;
}


console.log(specialChars.value);





// Add event listener to generate button
generateBtn.addEventListener("click", showModal);

