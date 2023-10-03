// up label
let formLabels = document.querySelectorAll(".form-label");
const formInputs = document.querySelectorAll(".form-input");
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("click", function onClick() {
    formLabels[i].classList.add("to-top");
  });
}
// add country code
let countryCode = document.querySelector("#country-code");
let countries = document.querySelectorAll(".country-item");
let coutryName = document.querySelector("#show-country");
let labelCoutry = document.querySelector(".form-label_coutry");
let labelPhone = document.querySelector(".phone-label");
for (const country of countries) {
  country.addEventListener("click", function addCode() {
    labelCoutry.classList.add("to-top");
    coutryName.value += country.value;
    labelPhone.classList.add("to-top");
    countryCode.value += country.dataset.code;
    console.log(countryCode.value);
    invalidPhone.textContent = "";
  });
}
// FORM VALIDATION
// check form inputs
let form = document.querySelector(".signup-form");

let inputsChecked = document.querySelectorAll(".check-input");
let formButton = document.querySelector(".signup-btn");
let errorMsg = document.querySelectorAll(".input-error");

let userNames = document.querySelectorAll(".user-info");
let invalidInfo = document.querySelectorAll(".name-error");

let userPhone = document.querySelector(".user-phone");
let invalidPhone = document.querySelector(".phone-error");

let pass1 = document.getElementById("password1");
let pass2 = document.querySelector("#password2");
let invalidPass = document.querySelector(".pass-error");
let invalidPass2 = document.querySelector(".pass-error2");

let email = document.getElementById("email");
let invalidEmail = document.querySelector(".email-error");

let checkbox = document.querySelector("#agriment");
let invalidCheckbox = document.querySelector(".agriment-check");

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let passPattern =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[-#!$@%^&*_+~=:;?\/])[-\w#!$@%^&*+~=:;?\/]+$/i;

//check all fields on an empty
function checkEmpty() {
  for (let i = 0; i < inputsChecked.length; i++) {
    if (inputsChecked[i].value == 0) {
      errorMsg[i].textContent = "Fill in the field";
    }
  }
}
//user name validation
function checkName() {
  for (let n = 0; n < userNames.length; n++) {
    if (userNames[n].value == 0) {
      invalidInfo[n].textContent = "Fill in the field";
    } else if (userNames[n].value.length <= 2) {
      invalidInfo[n].textContent = "The name must be more than 2 characters";
    } else {
      invalidInfo[n].textContent = "";
    }
  }
  for (const iterator of object) {
    
  }
}
// check phone length
function checkPhone() {
  if (userPhone.value == 0) {
    invalidPhone.textContent = "Fill in the field";
  } else if (userPhone.value.length < 6) {
    console.log(userPhone.value);
    invalidPhone.textContent = "Phone is not correct";
  } else {
    invalidPhone.textContent = "";
  }
}
// password validation
function checkPass() {
  if (pass1.value == 0 && pass2.value == 0) {
    invalidPass.textContent = "Fill in the field";
    invalidPass2.textContent = "Fill in the field";
  } else if (!pass1.value.match(passPattern)) {
    console.log(pass1.value);
    invalidPass.textContent =
      "Password must have 1 letter, 1 number and one symbol";
    // invalidPass2.textContent = '';
  } else if (pass1.value !== pass2.value) {
    console.log(pass1.value);
    console.log(pass2.value);
    invalidPass.textContent = "";
    invalidPass2.textContent = "Password does not match";
  } else {
    invalidPass.textContent = "";
    invalidPass2.textContent = "";
  }
}
// email validation
function checkEmail() {
  if (email.value == 0) {
    invalidEmail.textContent = "Fill in the field";
  } else if (!email.value.match(emailPattern)) {
    invalidEmail.textContent = "Email is not correct";
  } else {
    invalidEmail.textContent = "";
  }
}
// checkbox validation
function checkCheckbox() {
  if (!checkbox.checked) {
    invalidCheckbox.classList.add("error-check");
  } else {
    invalidCheckbox.classList.remove("error-check");
  }
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkEmpty();
  checkName();
  checkPhone();
  checkPass();
  checkEmail();
  checkCheckbox();
});
