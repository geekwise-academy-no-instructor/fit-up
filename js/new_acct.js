const firstNameInput = document.getElementById('firstname').value;
const lastNameInput = document.getElementById('lastname').value;
const emailInput = document.getElementById('email').value;
const userNameInput = document.getElementById('username').value;
const passwordInput = document.getElementById('password').value;
const confirmPasswordInput = document.getElementById('confirm_password').value;

function populateStorage() {
  localStorage.setItem('firstname', firstNameInput);
  localStorage.setItem('lastname', lastNameInput);
  localStorage.setItem('email', emailInput);
  localStorage.setItem('username', userNameInput);
  localStorage.setItem('password', passwordInput);
  localStorage.setItem('confirm_password', confirmPasswordInput);  
}
populateStorage();

