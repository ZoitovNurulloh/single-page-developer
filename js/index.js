document.querySelector("#btn").addEventListener("click", function(e) {
  e.preventDefault()
  userNameValid();
  userEmailValid();
  userTextAreaValid();
});

let userName = document.getElementById("username");
let userEmail = document.getElementById("useremail");
let userTextArea = document.getElementById("message");
let errIcon = document.getElementById("form__icon");
let errIconEmail = document.getElementById("form__icon--email");
let errIconTextarea = document.getElementById("form__icon--teatarea");
let formErrText = document.getElementById("form__text--err");
let formErrTextArea = document.getElementById("form__textarea--err");
let formErrEmail = document.getElementById("form__email--err");



function userNameValid() {

  if (userName.value === "" || userName.value == null) {
    errIcon.classList.add("form__icon--d");
    userName.classList.add("form__error");
    formErrText.textContent = "Sorry, invalid format here";
  }else {
    userName.classList.remove("form__error");
    userName.classList.add("form__success");
    errIcon.classList.remove("form__icon--d");
    formErrText.textContent = "";
  }
}

function userEmailValid() {
  if(userEmail.value === "" || userEmail.value == null) {
    errIconEmail.classList.add("form__icon--d");
    userEmail.classList.add("form__error");
    formErrEmail.textContent = "Sorry, invalid format here";
  }else {
    userEmail.classList.remove("form__error");
    userEmail.classList.add("form__success");
    errIcon.classList.remove("form__icon--d");
    formErrEmail.textContent = "";
  }
}

function userTextAreaValid() {
  if(userTextArea.value === "" || userTextArea.value == null) {
    errIconTextarea.classList.add("form__icon--d");
    userTextArea.classList.add("form__error");
    formErrTextArea.textContent = "Sorry, invalid format here";
  }else {
    userTextArea.classList.remove("form__error");
    errIconTextarea.classList.remove("form__icon--d");
    userTextArea.classList.add("form__success");
    errIcon.classList.remove("form__icon--d");
    formErrTextArea.textContent = "";
  }
}


userName.addEventListener("focusout", userNameValid);
userEmail.addEventListener("focusout", userEmailValid);
userTextArea.addEventListener("focusout", userTextAreaValid);