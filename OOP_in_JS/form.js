"use strict";

function validateForm() {
  //   selected by name
  const fullName = document.forms["registerUser"]["fullName"].value;
  const email = document.forms["registerUser"]["email"].value;
  const password = document.forms["registerUser"]["password"].value;

  //   selected by ID
  const fullNameValidationMessage = document.getElementById(
    "fullNameValidationMessage"
  );
  const emailValidationMessage = document.getElementById(
    "fullNameValidationMessage"
  );
  const passwordValidationMessage = document.getElementById(
    "fullNameValidationMessage"
  );

  const names = fullName.split(" ");

  if (fullName === "") {
    fullNameValidationMessage.innerHTML = "full name is required";
    return false;
  } else if (names.length < 2) {
    fullNameValidationMessage.innerHTML = "full name is incomplete";
    return false;
  }

  if (email === "") {
    emailValidationMessage.innerHTML = "please insert email";
    return false;
  } else if (!email.includes("@")) {
    emailValidationMessage.innerHTML = "please insert valid email";
    return false;
  }

  if (password === "") {
    passwordValidationMessage.innerHTML = "please insert password";
    return false;
  } else if (password.length < 8) {
    passwordValidationMessage.innerHTML = "please use strong password";
    return false;
  }
}
