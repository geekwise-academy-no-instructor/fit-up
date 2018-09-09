'use strict'

const mobResults = document.querySelector("#mobResults");
const footTable = document.querySelector("#footTable");
const kneeTable = document.querySelector("#kneeTable");
const lphcTable = document.querySelector("#lphcTable");
const shoulderTable = document.querySelector("#shoulderTable");

// footTable Compensations
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
  function footTableComps() {
    if (feetTurnOut === "checked" || feetFlatten1 === "checked" || feetFlatten2 === "checked" || heelsRise === "checked") {
      footTable.classList.remove("ghost");
    } else {}
  };
  footTableComps();

  function kneeTableComps() {
    if (kneesMoveIn === "checked" || kneesMoveOut === "checked") {
      kneeTable.classList.remove("ghost");
    } else {}
  };
  kneeTableComps();

  function shoulderTableComp() {
    if (armsFallForward === "checked") {
      shoulderTable.classList.remove("ghost");
    } else {}
  };
  shoulderTableComp();


});
