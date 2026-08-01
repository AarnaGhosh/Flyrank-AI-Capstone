const form = document.getElementById('settingsForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const themeInput = document.getElementById('theme');
const successMessage = document.getElementById('successMessage');

const errorFields = {
  fullName: document.getElementById('fullNameError'),
  email: document.getElementById('emailError'),
  password: document.getElementById('passwordError'),
  theme: document.getElementById('themeError')
};

function setError(fieldName, message) {
  errorFields[fieldName].textContent = message;
}

function clearError(fieldName) {
  setError(fieldName, '');
}

function validateFullName() {
  const value = fullNameInput.value.trim();
  if (!value) {
    setError('fullName', 'Full Name is required.');
    return false;
  }
  clearError('fullName');
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) {
    setError('email', 'Email is required.');
    return false;
  }

  if (!emailPattern.test(value)) {
    setError('email', 'Enter a valid email address.');
    return false;
  }

  clearError('email');
  return true;
}

function validatePassword() {
  const value = passwordInput.value;

  if (!value) {
    setError('password', 'Password is required.');
    return false;
  }

  if (value.length < 8) {
    setError('password', 'Password must be at least 8 characters.');
    return false;
  }

  clearError('password');
  return true;
}

function validateTheme() {
  if (!themeInput.value) {
    setError('theme', 'Please select a theme.');
    return false;
  }

  clearError('theme');
  return true;
}

function validateForm() {
  const isFullNameValid = validateFullName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isThemeValid = validateTheme();

  return isFullNameValid && isEmailValid && isPasswordValid && isThemeValid;
}

function resetSuccessMessage() {
  successMessage.textContent = '';
}

[fullNameInput, emailInput, passwordInput, themeInput].forEach((input) => {
  input.addEventListener('input', () => {
    resetSuccessMessage();

    if (input === fullNameInput) validateFullName();
    if (input === emailInput) validateEmail();
    if (input === passwordInput) validatePassword();
    if (input === themeInput) validateTheme();
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  resetSuccessMessage();

  if (!validateForm()) {
    return;
  }

  successMessage.textContent = 'Settings saved successfully.';
  form.reset();
  clearError('fullName');
  clearError('email');
  clearError('password');
  clearError('theme');
});
