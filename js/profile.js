const pfName = document.querySelector('.pfName');
const plName = document.querySelector('.plName');
const pemail = document.querySelector('.pemail');
const puName = document.querySelector('.p_uname');
const paraAge = document.querySelector('.para_age');
const paraHeightFt = document.querySelector('.para_heightft');
const paraHeightIn = document.querySelector('.para_heightin');
const paraWeight = document.querySelector('.para_weight');
const paraFGoals = document.querySelector('.para_fitGoals');
const paraBMI = document.querySelector('.para_bmi');
const paraExWeek = document.querySelector('.para_exPerWeek');
const paraExDay = document.querySelector('.para_exPerDay');
const paraExSetting = document.querySelector('.para_exSetting');

    
function pullStorage() {

   localStorage.getItem('firstname');
   localStorage.getItem('lastname');
   localStorage.getItem('email');
   localStorage.getItem('username');
   localStorage.getItem('age');
   localStorage.getItem('height_ft');
   localStorage.getItem('height_in');
   localStorage.getItem('weight_lb');
   localStorage.getItem('fitnessGoals');
   localStorage.getItem('exPerWeek');
   localStorage.getItem('exPerDay');
   localStorage.getItem('exSetting');
  
//Create p element
  const pFName = document.createElement('p');
//Add class
  pFName.className = 'inputs';
//Add id
  pFName.setAttribute('id', 'first_name');
//Create text node and append to p
  pFName.appendChild(document.createTextNode(localStorage.getItem('firstname')));
//Append p to h4
  pfName.appendChild(pFName);

//Create p element
 const pLName = document.createElement('p');
//Add class
  pLName.className = 'inputs';
//Add id
  pLName.setAttribute('id', 'last_name');
//Create text node and append to p
  pLName.appendChild(document.createTextNode(localStorage.getItem('lastname')));
//Append p to h4
  plName.appendChild(pLName);

  //Create p element
  const pEmail = document.createElement('p');
//Add class
  pEmail.className = 'inputs';
//Add id
  pEmail.setAttribute('id', 'e_mail');
//Create text node and append to p
  pEmail.appendChild(document.createTextNode(localStorage.getItem('email')));
//Append p to h4
  pemail.appendChild(pEmail);

//Create p element
  const pUName = document.createElement('p');
//Add class
  pUName.className = 'inputs';
//Add id
  pUName.setAttribute('id', 'user_name');
//Create text node and append to p
  pUName.appendChild(document.createTextNode(localStorage.getItem('username')));
//Append p to h4
  puName.appendChild(pUName);

  //Create p element
  const pAge = document.createElement('p');
//Add class
  pAge.className = 'inputs';
//Add id
  pAge.setAttribute('id', '_age');
//Create text node and append to p
  pAge.appendChild(document.createTextNode(localStorage.getItem('age')));
//Append p to h4
  paraAge.appendChild(pAge);

  //Create p element
  const pHeightFt = document.createElement('p');
//Add class
  pHeightFt.className = 'inputs';
//Add id
  pHeightFt.setAttribute('id', 'heightft');
//Create text node and append to p
  pHeightFt.appendChild(document.createTextNode(localStorage.getItem('height_ft')));
//Append p to h4
  paraHeightFt.appendChild(pHeightFt);

//Create p element
const pHeightIn = document.createElement('p');
//Add class
  pHeightIn.className = 'inputs';
//Add id
  pHeightIn.setAttribute('id', 'heightin');
//Create text node and append to p
  pHeightIn.appendChild(document.createTextNode(localStorage.getItem('height_in')));
//Append p to h4
  paraHeightIn.appendChild(pHeightIn);

  //Create p element
  const pWeight = document.createElement('p');
//Add class
  pWeight.className = 'inputs';
//Add id
  pWeight.setAttribute('id', 'weight');
//Create text node and append to p
  pWeight.appendChild(document.createTextNode(localStorage.getItem('weight_lb')));
//Append p to h4
  paraWeight.appendChild(pWeight);

//Create p element
const pFGoals = document.createElement('p');
//Add class
  pFGoals.className = 'inputs';
//Add id
  pFGoals.setAttribute('id', 'first_name');
//Create text node and append to p
  pFGoals.appendChild(document.createTextNode(localStorage.getItem('fitnessGoals')));
//Append p to h4
  paraFGoals.appendChild(pFGoals);

//Create p element
  const pExWeek = document.createElement('p');
//Add class
  pExWeek.className = 'inputs';
//Add id
  pExWeek.setAttribute('id', 'ex_PerWeek');
//Create text node and append to p
  pExWeek.appendChild(document.createTextNode(localStorage.getItem('exPerWeek')));
//Append p to h4
  paraExWeek.appendChild(pExWeek);
  
  //Create p element
  const pDay = document.createElement('p');
//Add class
  pDay.className = 'inputs';
//Add id
  pDay.setAttribute('id', 'ex_PerDay');
//Create text node and append to p
  pDay.appendChild(document.createTextNode(localStorage.getItem('exPerDay')));
//Append p to h4
  paraExDay.appendChild(pDay);

//Create p element
  const pSetting = document.createElement('p');
//Add class
  pSetting.className = 'inputs';
//Add id
  pSetting.setAttribute('id', 'ex_Setting');
//Create text node and append to p
  pSetting.appendChild(document.createTextNode(localStorage.getItem('exSetting')));
//Append p to h4
  paraExSetting.appendChild(pSetting);

}
pullStorage();


