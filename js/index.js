document.querySelector("#btn").addEventListener("click", function(e) {
  e.preventDefault()
  userNameValid();
  userEmailValid();
  userTextAreaValid();
});

let userName = document.getElementById("username");
let userEmail = document.getElementById("useremail");
let userTextArea = document.getElementById("message");



function userNameValid() {
  let errIcon = document.getElementById("form__icon");
  let formErrText = document.getElementById("form__text--err");
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
  let errIcon = document.getElementById("form__icon");
  let formErrText = document.getElementById("form__text--err");
  if(userEmail.value === "" || userEmail.value == null) {
    errIcon.classList.add("form__icon--d");
    userEmail.classList.add("form__error");
    formErrText.textContent = "Sorry, invalid format here";
  }else {
    userEmail.classList.remove("form__error");
    userEmail.classList.add("form__success");
    errIcon.classList.remove("form__icon--d");
    formErrText.textContent = "";
  }
}

function userTextAreaValid() {
  let errIcon = document.getElementById("form__icon");
  let formErrText = document.getElementById("form__text--err");

  if(userTextArea.value === "" || userTextArea.value == null) {
    errIcon.classList.add("form__icon--d");
    userTextArea.classList.add("form__error");
    formErrText.textContent = "Sorry, invalid format here";
  }else {
    userTextArea.classList.remove("form__error");
    userTextArea.classList.add("form__success");
    errIcon.classList.remove("form__icon--d");
    formErrText.textContent = "";
  }
}


userName.addEventListener("focusout", userNameValid);
userEmail.addEventListener("focusout", userEmailValid);
userTextArea.addEventListener("focusout", userTextAreaValid);