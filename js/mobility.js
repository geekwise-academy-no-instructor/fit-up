'use strict'
const mobCheckBox = document.forms.mobCheckBox;



mobCheckBox.addEventListener("submit", e => {
  e.preventDefault();

  function feetTurnOut() {
    return (document.forms.mobCheckBox.feetTurnOut.checked ? "checked" : "unchecked");
  };
  localStorage.setItem('feetTurnOut', feetTurnOut());


  function feetFlatten1() {
    return (document.forms.mobCheckBox.feetFlatten1.checked ? "checked" : "unchecked");
  };
  localStorage.setItem('feetFlatten1', feetFlatten1());

  function kneesMoveIn() {
    return (document.forms.mobCheckBox.kneesMoveIn.checked ? "checked" : "unchecked");
  };
  localStorage.setItem('kneesMoveIn', kneesMoveIn());

  function kneesMoveOut() {
    return (document.forms.mobCheckBox.kneesMoveOut.checked ? "checked" : "unchecked");
  };
  localStorage.setItem('kneesMoveOut', kneesMoveOut());

  function lowBackArches() {
    return (document.forms.mobCheckBox.lowBackArches.checked ? "checked" : "unchecked");
  };
  localStorage.setItem('lowBackArches', lowBackArches());

  function lowBackRounds() {
    return (document.forms.mobCheckBox.lowBackRounds.checked ? "checked" : "unchecked");
  };
  localStorage.setItem('lowBackRounds', lowBackRounds());

  function forwardLean() {
    return (document.forms.mobCheckBox.forwardLean.checked ? "checked" : "unchecked");
  };
  localStorage.setItem('forwardLean', forwardLean());

  function armsFallForward() {
    return (document.forms.mobCheckBox.armsFallForward.checked ? "checked" : "unchecked");
  };
  localStorage.setItem('armsFallForward', armsFallForward());

  function feetFlatten2() {
    return (document.forms.mobCheckBox.feetFlatten2.checked ? "checked" : "unchecked");
  };
  localStorage.setItem('feetFlatten2', feetFlatten2());

  function heelsRise() {
    return (document.forms.mobCheckBox.heelsRise.checked ? "checked" : "unchecked");
  };
  localStorage.setItem('heelsRise', heelsRise());

  function weightShiftLeft() {
    return (document.forms.mobCheckBox.weightShiftLeft.checked ? "checked" : "unchecked");
  };
  localStorage.setItem('weightShiftLeft', weightShiftLeft());

  function weightShiftRight() {
    return (document.forms.mobCheckBox.weightShiftRight.checked ? "checked" : "unchecked");
  };
  localStorage.setItem('weightShiftRight', weightShiftRight());

  window.location.href = 'mobResults.html';

});
