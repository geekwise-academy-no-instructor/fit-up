'use strict'

const upContForm = document.forms.upContForm

let inputGroupSelect01 = document.querySelector('#inputGroupSelect01').value;
let inputGroupSelect02 = document.querySelector('#inputGroupSelect02').value;
let inputGroupSelect03 = document.querySelector('#inputGroupSelect03').value;


upContForm.addEventListener("sumbit", e => {
e.preventDefault();

function popLS() {
localStorage.setItem('inputGroupSelect01', inputGroupSelect01);
localStorage.setItem('inputGroupSelect02', inputGroupSelect02);
localStorage.setItem('inputGroupSelect03', inputGroupSelect03);
};
popLS();
i
window.location.href = 'index.html';

});


console.log(localStorage.getItem('inputGroupSelect01'));
console.log(localStorage.getItem('inputGroupSelect02'));
console.log(localStorage.getItem('inputGroupSelect03'));

// mobCheckBox.addEventListener("submit", e => {
//     e.preventDefault();
  
//     function feetTurnOut() {
//       return (document.forms.mobCheckBox.feetTurnOut.checked ? "checked" : "unchecked");
//     };
//     localStorage.setItem('feetTurnOut', feetTurnOut());

// mobCheckBox.addEventListener("submit", e => {
//     e.preventDefault();
  
//     function feetTurnOut() {
//       return (document.forms.mobCheckBox.feetTurnOut.checked ? "checked" : "unchecked");
//     };
//     localStorage.setItem('feetTurnOut', feetTurnOut());

// mobCheckBox.addEventListener("submit", e => {
//     e.preventDefault();
  
//     function feetTurnOut() {
//       return (document.forms.mobCheckBox.feetTurnOut.checked ? "checked" : "unchecked");
//     };
//     localStorage.setItem('feetTurnOut', feetTurnOut());     