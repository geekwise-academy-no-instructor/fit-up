'use strict'
const mobCheckBox = document.forms.mobCheckBox;
const mobResults = document.querySelector("#mobResults");
const footTable = document.querySelector("#footTable");
const kneeTable = document.querySelector("#kneeTable");
const lphcTable = document.querySelector("#lphcTable");
const shoulderTable = document.querySelector("#shoulderTable");


mobCheckBox.addEventListener("submit", e => {
  e.preventDefault();
  window.location.href = 'mobResults.html';
  if (document.forms.mobCheckBox.querySelector("#feetTurnOut").checked = true) {
    mobResults.footTable.classList.remove("ghost");
  } else {
      
  }





})
