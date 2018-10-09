'use strict'
const form = document.forms.userProfile;
const ageInput = document.querySelector('#age').value;
const heightFtInput = document.querySelector('#height_ft').value;
const heightInInput = document.querySelector('#height_in').value;
const weightInput = document.querySelector('#weight_lb').value;
const fitnessGoalsInput = document.querySelector('#fitnessGoals').value;

// Local Storage Population

function popLS(){
  localStorage.setItem('age', ageInput);
  localStorage.setItem('height_ft', heightFtInput);
  localStorage.setItem('height_in', heightInInput);
  localStorage.setItem('weight_lb', weightInput);
  localStorage.setItem('fitnessGoals', fitnessGoalsInput);
}
popLS();


userProfile.addEventListener('submit', e => {
  e.preventDefault();

  popLS();

  window.location.href = 'up_cont.html';

});
