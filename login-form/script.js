const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const passwdConf = document.querySelector("#password-conf")


/**
 * Evaluates a set of form inputs to ensure that required fields are not left empty. This function updates each input's visual state based on whether it contains a non-empty value.
 *
 * Args:
 *   arrayInput: An array of input elements that should be checked for required values.
 *
 * Returns:
 *   None. The function provides user feedback by marking inputs as valid or invalid and showing error messages when needed.
 */
function checkRequired(arrayInput) {
  let isValid = true

  arrayInput.forEach(input => {
    if (input.value.trim() === "") {
      showError(input, `${nameCapitalized(input.id)} is required`)
      isValid = false
    }
    else {
      showSuccess(input)
    }
  });

  return isValid
}


/**
 * Evaluates a set of form inputs to ensure that required fields are not left empty. This function updates each input's visual state based on whether it contains a non-empty value.
 *
 * Args:
 *   arrayInput: An array of input elements that should be checked for required values.
 *
 * Returns:
 *   None. The function provides user feedback by marking inputs as valid or invalid and showing error messages when needed.
 */
function checkLength(input, min, max) {
  const value = input.value.trim()
  if (value.length < min) {
    showError(input, `${nameCapitalized(input.id)} must be at least ${min} characters`)
    return false
  }

  if (value.length > max) {
    showError(input, `${nameCapitalized(input.id)} must be less than ${max} characters`)
    return false
  }

  showSuccess(input)
  return true
}


/**
 * Compares two password input fields to ensure they contain appropriate and matching values. This function provides feedback when the confirmation password is empty or does not align with the original password.
 *
 * Args:
 *   input1: The primary password input element whose value is used as the reference.
 *   input2: The password confirmation input element that must contain a value and match the primary password.
 *
 * Returns:
 *   None. The function updates the visual state of the confirmation field to indicate missing value, mismatch, or successful match.
 */
function isPasswordMatch(input1, input2) {
  const password = input1.value.trim()
  const passwordConf = input2.value.trim()

  if (!passwordConf) {
    showError(input2, "Password confirmation is required")
    return false
  }

  if (password !== passwordConf) {
    showError(input2, `Password doesn't match`)
    return false
  }

  showSuccess(input2)
  return true
}

/**
 * Converts a given string to a capitalized form where the first character is uppercase. This is used to create more readable field names for display or messaging.
 *
 * Args:
 *   input: The string to be transformed into capitalized form.
 *
 * Returns:
 *   A new string with the first character converted to uppercase and the remaining characters left unchanged.
 */
function nameCapitalized(input) {
  return `${input.slice(0, 1).toUpperCase()}${input.slice(1)}`
}


/**
 * Checks whether a given email string matches a valid email address format. This helps determine if user-provided email input should be treated as acceptable.
 *
 * Args:
 *   email: The email address string to be validated.
 *
 * Returns:
 *   A boolean indicating whether the provided email string conforms to a valid email pattern.
 */
function isEmailValid(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input)
    return true
  }

  showError(input, `${nameCapitalized(input.id)} is not valid`)
  return false
}


/**
 * Marks a form input as invalid and displays an associated error message. This provides visual feedback to the user when the input value does not meet validation requirements.
 *
 * Args:
 *   input: The input element that has failed validation.
 *   message: A descriptive error message explaining why the input is invalid.
 *
 * Returns:
 *   None. The function updates the DOM to reflect the invalid state and show the error message.
 */
function showError(input, message) {
  const formControl = input.closest(".box")
  formControl.classList.remove("valid")
  formControl.classList.add("invalid")

  const errorMessage = formControl.querySelector(".error-message")
  errorMessage.textContent = message
}


/**
 * Marks a form input as successfully validated and updates its visual state. This function signals to the user that the current value of the input is acceptable.
 *
 * Args:
 *   input: The input element that has passed validation checks.
 *
 * Returns:
 *   None. The function updates the DOM to reflect a valid state for the input container.
 */
function showSuccess(input) {
  const formControl = input.closest(".box")
  formControl.classList.remove("invalid")
  formControl.classList.add("valid")
}


form.addEventListener("submit", e => {
  const required = checkRequired([username, email, password, passwdConf]);

  if (!required) {
    e.preventDefault();
    return;
  }

  if (!(
    checkLength(username, 3, 15) &&
    checkLength(password, 8, 25) &&
    isEmailValid(email) &&
    isPasswordMatch(password, passwdConf)
  )) {
    e.preventDefault();
  }
});
