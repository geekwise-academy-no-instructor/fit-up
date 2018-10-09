'use strict'

const upContForm = document.forms.upContForm

let mainFitGoal = localStorage.getItem('fitnessGoals');
let thirtyMinutes = document.getElementById('thirtyMinutes');

let inputExPerWeek = document.getElementById('exPerWeek').value;
let inputExPerDay = document.getElementById('exPerDay').value;
let inputExSetting = document.getElementById('exSetting').value;

// Local Storage Population

// console.log(mainFitGoal);

function fitGoalCheck () {
  if (mainFitGoal === "4" || mainFitGoal === "6") {
    thirtyMinutes.classList.add("ghost");
  } else {}
};
fitGoalCheck();

function popLS(){
  localStorage.setItem('exPerWeek', inputExPerWeek);
  localStorage.setItem('exPerDay', inputExPerDay);
  localStorage.setItem('exSetting', inputExSetting);
}
popLS();


upContForm.addEventListener('submit', e => {
  e.preventDefault();

  popLS();

  exPerWeek.onchange = popLS;
  exPerDay.onchange = popLS;
  exSetting.onchange = popLS;

  window.location.href = 'fitnessplan.html';

});
