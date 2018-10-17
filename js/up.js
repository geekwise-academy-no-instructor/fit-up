'use strict'
const form = document.forms.userProfile;
let ageInput = document.querySelector('#age').value;
let heightFtInput = document.querySelector('#height_ft').value;
let heightInInput = document.querySelector('#height_in').value;
let weightInput = document.querySelector('#weight_lb').value;
let fitnessGoalsInput = document.querySelector('#fitnessGoals').value;

// Local Storage Population

function popLS(){
  ageInput = ageInput.toString(); 
  heightFtInput = heightFtInput.toString();
  heightInInput = heightInInput.toString();
  weightInput = weightInput.toString();
  fitnessGoalsInput = fitnessGoalsInput.toString();

  localStorage.setItem('age', ageInput);
  localStorage.setItem('height_ft', heightFtInput);
  localStorage.setItem('height_in', heightInInput);
  localStorage.setItem('weight_lb', weightInput);
  localStorage.setItem('fitnessGoals', fitnessGoalsInput);
};

function getLS(){
  console.log(localStorage.getItem('age'));
  console.log(localStorage.getItem('height_ft'));
  console.log(localStorage.getItem('height_in'));
  console.log(localStorage.getItem('weight_lb'));
  console.log(localStorage.getItem('fitnessGoals'));
};



function failLS(){
  console.log("failed to update local storage");
};


userProfile.addEventListener('submit', e => {

  e.preventDefault();

  popLS();

  window.location.href = 'up_cont.html';

//   function setLocalStorageAndLeave(){
//     (function one(){
//          if (localStorage.getItem('age') === ageInput & 
//          localStorage.getItem('height_ft') === heightFtInput & 
//          localStorage.getItem('height_in') === heightInInput &
//          localStorage.getItem('weight_lb') === weightInput &
//          localStorage.getItem('fitnessGoals') === fitnessGoalsInput) {
//             window.location.href = 'up_cont.html';
//          } else {
//             setTimeout(one, 30);
//          }
//     })
// };

  

  // function nextPage(){

  // window.location.href = 'up_cont.html';
  // };

  // setTimeout(nextPage, 2000);
});

