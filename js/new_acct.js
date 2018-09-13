const firstNameInput = document.getElementById('firstname');
const lastNameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const userNameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');

function populateStorage() {
  localStorage.setItem('firstname', document.getElementById('firstname').value);
  localStorage.setItem('lastname', document.getElementById('lastname').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('username', document.getElementById('username').value);
  localStorage.setItem('password', document.getElementById('password').value);
  localStorage.setItem('confirm_password', document.getElementById('confirm_password').value);  
}
populateStorage();

