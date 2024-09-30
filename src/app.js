"use strict";

const generateBtn = document.getElementById("generate-btn");
const resetBtn = document.getElementById("reset-btn");
const passwordField = document.getElementById("password");

generateBtn.addEventListener("click", function() {
  const length = document.querySelector('input[name="length"]:checked').value;
  const password = generatePassword(length);
  passwordField.value = password;
});

resetBtn.addEventListener('click', function(){
  passwordField.value = '';
});


function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}
