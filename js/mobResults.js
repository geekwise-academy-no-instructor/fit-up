'use strict'

const mobResults = document.querySelector("#mobResults");
const footTable = document.querySelector("#footTable");
const kneeTable = document.querySelector("#kneeTable");
const forwardLeanTable = document.querySelector("#forwardLeanTable");
const weightShiftTable = document.querySelector("#weightShiftTable");
const lowBackTable = document.querySelector("#lowbackTable");
const shoulderTable = document.querySelector("#shoulderTable");

// Dynamic td's
let weightShiftPhase1 = document.querySelector("#weightShiftPhase1");
let weightShiftPhase2 = document.querySelector("#weightShiftPhase2");
let weightShiftPhase3 = document.querySelector("#weightShiftPhase3");
let weightShiftPhase4 = document.querySelector("#weightShiftPhase4");

let weightShiftPhase1 = document.querySelector("#lowbackPhase1");
let weightShiftPhase2 = document.querySelector("#lowbackPhase2");
let weightShiftPhase3 = document.querySelector("#lowbackPhase3");
let weightShiftPhase4 = document.querySelector("#lowbackPhase4");

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

});
