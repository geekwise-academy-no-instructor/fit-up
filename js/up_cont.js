'use strict'

const upContForm = document.forms.upContForm

let inputExPerWeek = document.getElementById('exPerWeek').value;
let inputExPerDay = document.getElementById('exPerDay').value;
let inputExSetting = document.getElementById('exSetting').value;

function popLS(){
  localStorage.setItem('exPerWeek', inputExPerWeek);
  localStorage.setItem('exPerDay', inputExPerDay);
  localStorage.setItem('exSetting', inputExSetting);
}
popLS();

console.log(localStorage.getItem('exPerWeek'));

