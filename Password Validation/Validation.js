const passwordField = document.getElementById("psw");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const special = document.getElementById("special");
const message = document.getElementById("message");

// Show the message box when the password field is clicked
passwordField.addEventListener("focus", function() {
  message.style.display = "block";
});

// Hide the message box when the password field loses focus
passwordField.addEventListener("blur", function() {
  message.style.display = "none";
});

// Validate the password strength when the user types in the password field
passwordField.addEventListener("keyup", function() {
  // Validate lowercase letters
  const lowerCaseLetters = /[a-z]/g;
  if (passwordField.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  const upperCaseLetters = /[A-Z]/g;
  if (passwordField.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate special characters
const specialCharacters = /[^\w\s]/g;
if (passwordField.value.match(specialCharacters)) {  
  special.classList.remove("invalid");
  special.classList.add("valid");
} else {
  special.classList.remove("valid");
  special.classList.add("invalid");
}


  // Validate numbers
const numbers = /[0-9]/g;
if (passwordField.value.match(numbers)) {  
  number.classList.remove("invalid");
  number.classList.add("valid");
} else {
  number.classList.remove("valid");
  number.classList.add("invalid");
}

  
  // Validate length
  if (passwordField.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
});


function validateForm(event) {
    // Prevent default form submission behavior
    event.preventDefault();
    
    // Get the value of the password field
    var password = document.getElementById("psw").value;
    
    // Validate the password using the regex pattern
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s]).{8,}$/;
    if (passwordPattern.test(password)) {
        // window.location.href="https://youtu.be/dQw4w9WgXcQ"
        window.open("https://youtu.be/dQw4w9WgXcQ","_blank")
    } else {
      // If password is invalid, show an error message
      alert("Password must contain at least one number, one uppercase and lowercase letter, one special character, and at least 8 or more characters");
    }
  }
  
