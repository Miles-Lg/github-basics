const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const passwdConf = document.querySelector("#password-conf")
// const submitBtn = document.querySelector("#submit")


form.addEventListener("submit", e => {
  e.preventDefault()
  checkRequired([username, email, password, passwdConf])
  checkLength(username, 3, 15)
  checkLength(password, 8, 25)
})


function checkRequired(arrayInput) {
  arrayInput.forEach(input => (input.value.trim() === "") ? showError(input, `${nameCapitalized(input.id)} is required`) : showSuccess(input));
}

function checkLength(input, min, max) {

}

function nameCapitalized(input) {
  return `${input.slice(0, 1).toUpperCase()}${input.slice(1)}`
}


function isEmailValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase())
}


function showError(input, message) {
  const formControl = input.closest(".box")
  formControl.className = "box invalid"
  const errorMessage = formControl.querySelector(".error-message")
  errorMessage.textContent = message
}


function showSuccess(input) {
  const formControl = input.closest(".box")
  formControl.className = "box valid"
}
