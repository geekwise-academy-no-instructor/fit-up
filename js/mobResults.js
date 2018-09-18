'use strict'

const mobResults = document.querySelector("#mobResults");
const footTable = document.querySelector("#footTable");
const kneeTable = document.querySelector("#kneeTable");
const forwardLeanTable = document.querySelector("#forwardLeanTable");
const weightShiftTable = document.querySelector("#weightShiftTable");
const lowBackTable = document.querySelector("#lowBackTable");
const shoulderTable = document.querySelector("#shoulderTable");

// Dynamic td's

let weightShiftHead = document.querySelector("#weightShiftHead");
let weightShiftPhase1 = document.querySelector("#weightShiftPhase1");
let weightShiftPhase2 = document.querySelector("#weightShiftPhase2");
let weightShiftPhase3 = document.querySelector("#weightShiftPhase3");
let weightShiftPhase4 = document.querySelector("#weightShiftPhase4");

let lowBackHead = document.querySelector("#lowBackHead")
let lowBackPhase1 = document.querySelector("#lowBackPhase1");
let lowBackPhase2 = document.querySelector("#lowBackPhase2");
let lowBackPhase3 = document.querySelector("#lowBackPhase3");
let lowBackPhase4 = document.querySelector("#lowBackPhase4");

// footTable Compensations - localStorage
let feetTurnOut = (localStorage.getItem('feetTurnOut'));
let feetFlatten1 = (localStorage.getItem('feetFlatten1'));
let feetFlatten2 = (localStorage.getItem('feetFlatten2'));
let heelsRise = (localStorage.getItem('heelsRise'));

// kneeTable Compensations
let kneesMoveIn = (localStorage.getItem('kneesMoveIn'));
let kneesMoveOut = (localStorage.getItem('kneesMoveOut'));

// lphcTable Compensations
let lowBackArches = (localStorage.getItem('lowBackArches'));
let lowBackRounds = (localStorage.getItem('lowBackRounds'));
let forwardLean = (localStorage.getItem('forwardLean'));
let weightShiftLeft = (localStorage.getItem('weightShiftLeft'));
let weightShiftRight = (localStorage.getItem('weightShiftRight'));


// shoulderTable Compensations
let armsFallForward = (localStorage.getItem('armsFallForward'));


window.addEventListener("load", e=> {
  // Foot Compensations
  function footTableComps() {
    if (feetTurnOut === "checked" || feetFlatten1 === "checked" || feetFlatten2 === "checked" || heelsRise === "checked") {
      footTable.classList.remove("ghost");
    } else {}
  };
  footTableComps();

  // Knee Compensations
  function kneeTableComps() {
    if (kneesMoveIn === "checked" || kneesMoveOut === "checked") {
      kneeTable.classList.remove("ghost");
    } else {}
  };
  kneeTableComps();

  // Excessive Forward Lean Compensation
  function forwardLeanComp() {
    if (forwardLean === "checked") {
      forwardLeanTable.classList.remove("ghost");
    } else {}
  };
  forwardLeanComp();

  // Arms Fall Forward Compensation
  function shoulderTableComp() {
    if (armsFallForward === "checked") {
      shoulderTable.classList.remove("ghost");
    } else {}
  };
  shoulderTableComp();

  // Low Back Compensations
  function lowBackComps() {
    if (lowBackArches === "checked") {
      lowBackTable.classList.remove("ghost");
      lowBackHead.innerHTML = "Corrective Exercise Program for LPHC Impairment: Low Back Arches";
      lowBackPhase1.innerHTML ='<p>&rArr; Hip flexor complex</p> <p>&rArr; Latissimus dorsi</p>';
      lowBackPhase2.innerHTML = '<p>&rArr; Hip flexor complex</p> <p>&rArr; Latissimus dorsi</p> <p>&rArr; Erector spinae</p>';
      lowBackPhase3.innerHTML = '<p>&rArr; Gluteus maxmus</p> <p>&rArr; Abdominal complex/ instrinsic core stabilizers</p>';
      lowBackPhase4.innerHTML = '<p>&rArr; Ball wall squat with overhead press</p>';
    } else if (lowBackRounds === "checked") {
      lowBackTable.classList.remove("ghost");
      lowBackHead.innerHTML = "Corrective Exercise Program for LPHC Impairment: Low Back Rounds";
      lowBackPhase1.innerHTML = '<p>&rArr; Hamstring complex</p> <p>&rArr; Adductor magnus</p>';
      lowBackPhase2.innerHTML = '<p>&rArr; Hamstring complex</p> <p>&rArr; Adductor magnus</p>';
      lowBackPhase3.innerHTML = '<p>&rArr; Gluteus maximus</p> <p>&rArr; Hip flexor complex</p> <p>&rArr; Erector spinae</p>';
      lowBackPhase4.innerHTML = '<p>&rArr; Ball wall squat with overhead press</p>';
    } else {}
  };
  lowBackComps();

  // Weight Shift Compensations
  function weightShiftComps() {
    if (weightShiftLeft === "checked") {
      weightShiftTable.classList.remove("ghost");
      weightShiftHead.innerHTML = "Corrective Exercise Program for LPHC Impairment: Asymmetric Weight Shift Left";
      weightShiftPhase1.innerHTML = '<p>&rArr; Adductors and TFL/IT band (left side)</p> <p>&rArr; Piriformis, bicep femoris, and gastrocnemius/soleus (right side)</p>';
      weightShiftPhase2.innerHTML = '<p>&rArr; Addcutors and TFL (left side)</p> <p>&rArr; Piriformis, bicep femoris, and gastrocnemius/soleus (right side)</p>';
      weightShiftPhase3.innerHTML = '<p>&rArr; Glutues medius (left side)</p> <p>&rArr; Addcutors (right side)</p>';
      weightShiftPhase4.innerHTML = '<p>&rArr; Ball wall squat with overhead press</p>';
    } else if (weightShiftRight === "checked") {
      weightShiftTable.classList.remove("ghost");
      weightShiftHead.innerHTML = "Corrective Exercise Program for LPHC Impairment: Asymmetric Weight Shift Right";
      weightShiftPhase1.innerHTML = '<p>&rArr; Adductors and TFL/IT band (right side)</p> <p>&rArr; Piriformis, bicep femoris, and gastrocnemius/soleus (left side)</p>';
      weightShiftPhase2.innerHTML = '<p>&rArr; Addcutors and TFL (right side)</p> <p>&rArr; Piriformis, bicep femoris, and gastrocnemius/soleus (left side)</p>';
      weightShiftPhase3.innerHTML = '<p>&rArr; Glutues medius (right side)</p> <p>&rArr; Addcutors (left side)</p>';
      weightShiftPhase4.innerHTML = '<p>&rArr; Ball wall squat with overhead press</p>';
    } else {}
  };
  weightShiftComps();

});
