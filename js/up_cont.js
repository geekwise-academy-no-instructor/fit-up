'use strict'

const upContForm = document.forms.upContForm

const inputExPerWeek = document.getElementById('exPerWeek').value;
const inputExPerDay = document.getElementById('exPerDay').value;
const inputExSetting = document.getElementById('exSetting').value;

function popLS(){
  localStorage.setItem('exPerWeek', inputExPerWeek);
  localStorage.setItem('exPerDay', inputExPerDay);
  localStorage.setItem('exSetting', inputExSetting);
}
popLS();

// console.log(localStorage.getItem('exPerWeek'));

