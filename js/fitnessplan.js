'use strict'

// BMI Calculator

// let heightFt = localStorage.getItem('height_ft');
//     heightIn = localStorage.getItem('height_in');
//     height = parseFloat(heightFt * 12) + parseFloat(heightIn);
//     weight = localStorage.getItem('weight_lb');
//     BMI = calculateBMI(height, weight);
//
// function calculateBMI(height, weight) {
//   let BMI = (weight / (height * height)) * 703
//
// return Math.round(BMI * Math.pow(10, 2)) / Math.pow(10, 2);
// }


// Fitness Plan Variables
let mainFitGoal = localStorage.getItem('fitnessGoals');
let daysPerWeek = localStorage.getItem('exPerWeek');
let timePerDay = localStorage.getItem('exPerDay');



window.addEventListener('load', e => {
  // Phase 1
  if (mainFitGoal === '1' & daysPerWeek === '1' & timePerDay === '1') {
    // Header
    document.getElementById('planHeader').innerHTML = "Phase: 1 Stabilization Endurance, Total Body (30 minutes)";
    // Warm-Up
    document.getElementById('warmUpEx1').innerHTML = "Treadmill";
    document.getElementById('warmUpSet1').innerHTML = "1";
    document.getElementById('warmUpTime1').innerHTML = "5 minutes";
    document.getElementById('warmUpCoach1').innerHTML = "Brisk walk to slow jog";

    // Core / Balance / Plyometric
    document.getElementById('coreEx1').innerHTML = "Floor Bridge";
    document.getElementById('coreSet1').innerHTML = "2";
    document.getElementById('coreReps1').innerHTML = "15";
    document.getElementById('coreTempo1').innerHTML = "Slow - 4/2/1";
    document.getElementById('coreRest1').innerHTML = "0 seconds";
    document.getElementById('coreCoach1').innerHTML;

    document.getElementById('plyoEx1').innerHTML = "Squat Jump w/ Stabilization";
    document.getElementById('plyoSet1').innerHTML = "2";
    document.getElementById('plyoReps1').innerHTML = "5";
    document.getElementById('plyoTempo1').innerHTML = "Slow - 4/2/1";
    document.getElementById('plyoRest1').innerHTML = "90 seconds";
    document.getElementById('plyoCoach1').innerHTML = "Hold landing 3-5 seconds";

    // Resistance
    document.getElementById('resistEx1').innerHTML = "Squat to Curl to Press";
    document.getElementById('resistSet1').innerHTML = "2";
    document.getElementById('resistReps1').innerHTML = "15";
    document.getElementById('resistTempo1').innerHTML = "Slow - 4/2/1";
    document.getElementById('resistRest1').innerHTML = "0 seconds";
    document.getElementById('resistCoach1').innerHTML = "Vertical Loading";

    document.getElementById('resistEx2').innerHTML = "Push-up (modified if needed)";
    document.getElementById('resistSet2').innerHTML = "2";
    document.getElementById('resistReps2').innerHTML = "15";
    document.getElementById('resistTempo2').innerHTML = "Slow - 4/2/1";
    document.getElementById('resistRest2').innerHTML = "0 seconds";
    document.getElementById('resistCoach2').innerHTML;

    document.getElementById('resistEx3').innerHTML = "Standing Cable Row";
    document.getElementById('resistSet3').innerHTML = "2";
    document.getElementById('resistReps3').innerHTML = "15";
    document.getElementById('resistTempo3').innerHTML = "Slow - 4/2/1";
    document.getElementById('resistRest3').innerHTML = "0 seconds";
    document.getElementById('resistCoach3').innerHTML;

    resistTr4.classList.remove("ghost");
    document.getElementById('resistEx4').innerHTML = "Step-up to Balance";
    document.getElementById('resistSet4').innerHTML = "2";
    document.getElementById('resistReps4').innerHTML = "15";
    document.getElementById('resistTempo4').innerHTML = "Slow - 4/2/1";
    document.getElementById('resistRest4').innerHTML = "90 seconds";
    document.getElementById('resistCoach4').innerHTML;

    // Cool-Down

    document.getElementById('coolDownEx1').innerHTML = "Treadmill";
    document.getElementById('coolDownSet1').innerHTML = "1";
    document.getElementById('coolDownTime1').innerHTML = "5 minutes";
    document.getElementById('coolDownCoach1').innerHTML = "Brisk walk";

  }
  // Phase 2
  else if (mainFitGoal === '5' & daysPerWeek === '1' & timePerDay === '1') {
    // Header
    document.getElementById('planHeader').innerHTML = "Phase: 2 Strength Endurance, Total Body (30 minutes)";
    // Warm-Up
    document.getElementById('warmUpEx1').innerHTML = "Treadmill";
    document.getElementById('warmUpSet1').innerHTML = "1";
    document.getElementById('warmUpTime1').innerHTML = "5 minutes";
    document.getElementById('warmUpCoach1').innerHTML = "Brisk walk to slow jog";

    // Core / Balance / Plyometric
    document.getElementById('coreEx1').innerHTML = "Ball Crunch";
    document.getElementById('coreSet1').innerHTML = "2";
    document.getElementById('coreReps1').innerHTML = "10";
    document.getElementById('coreTempo1').innerHTML = "Medium - 2/0/2";
    document.getElementById('coreRest1').innerHTML = "0 seconds";
    document.getElementById('coreCoach1').innerHTML;

    document.getElementById('plyoEx1').innerHTML = "Squat Jump";
    document.getElementById('plyoSet1').innerHTML = "2";
    document.getElementById('plyoReps1').innerHTML = "10";
    document.getElementById('plyoTempo1').innerHTML = "Medium - 2/0/2";
    document.getElementById('plyoRest1').innerHTML = "60 seconds";
    document.getElementById('plyoCoach1').innerHTML;

    // Resistance
    document.getElementById('resistEx1').innerHTML = "<p>Bench Press</p><p>Push-up</p>";
    document.getElementById('resistSet1').innerHTML = "2";
    document.getElementById('resistReps1').innerHTML = "<p>12</p><p>12</p>";
    document.getElementById('resistTempo1').innerHTML = "<p>Medium - 2/0/2</p><p>Slow - 4/2/1</p>";
    document.getElementById('resistRest1').innerHTML = "<p>0 seconds</p><p>60 seconds</p>";
    document.getElementById('resistCoach1').innerHTML = "Superset";

    document.getElementById('resistEx2').innerHTML = "<p>Seated Cable Row</p><p>Bent Over Dumbbell Row</p>";
    document.getElementById('resistSet2').innerHTML = "2";
    document.getElementById('resistReps2').innerHTML = "<p>12</p><p>12</p>";
    document.getElementById('resistTempo2').innerHTML = "<p>Medium - 2/0/2</p><p>Slow - 4/2/1</p>";
    document.getElementById('resistRest2').innerHTML = "<p>0 seconds</p><p>60 seconds</p>";
    document.getElementById('resistCoach2').innerHTML = "Superset";

    document.getElementById('resistEx3').innerHTML = "<p>Leg Press</p><p>Step-up to Balance</p>";
    document.getElementById('resistSet3').innerHTML = "2";
    document.getElementById('resistReps3').innerHTML = "<p>12</p><p>12</p>";
    document.getElementById('resistTempo3').innerHTML = "<p>Medium - 2/0/2</p><p>Slow - 4/2/1</p>";
    document.getElementById('resistRest3').innerHTML = "<p>0 seconds</p><p>60 seconds</p>";
    document.getElementById('resistCoach3').innerHTML = "Superset";

    // Cool-Down

    document.getElementById('coolDownEx1').innerHTML = "Treadmill";
    document.getElementById('coolDownSet1').innerHTML = "1";
    document.getElementById('coolDownTime1').innerHTML = "5 minutes";
    document.getElementById('coolDownCoach1').innerHTML = "Brisk walk";
  }

  // Phase 3
  else if (mainFitGoal === '3' & daysPerWeek === '1' & timePerDay === '1') {
    // Header
    document.getElementById('planHeader').innerHTML = "Phase: 3 Hypertrophy, Total Body (30 minutes)";
    // Warm-Up
    document.getElementById('warmUpEx1').innerHTML = "Treadmill";
    document.getElementById('warmUpSet1').innerHTML = "1";
    document.getElementById('warmUpTime1').innerHTML = "5 minutes";
    document.getElementById('warmUpCoach1').innerHTML = "Brisk walk to slow jog";

    // Core / Balance / Plyometric
    document.getElementById('coreEx1').innerHTML = "Ball Crunch";
    document.getElementById('coreSet1').innerHTML = "2";
    document.getElementById('coreReps1').innerHTML = "10";
    document.getElementById('coreTempo1').innerHTML = "Medium - 2/0/2";
    document.getElementById('coreRest1').innerHTML = "0 seconds";
    document.getElementById('coreCoach1').innerHTML;

    document.getElementById('plyoEx1').innerHTML = "Squat Jump";
    document.getElementById('plyoSet1').innerHTML = "2";
    document.getElementById('plyoReps1').innerHTML = "10";
    document.getElementById('plyoTempo1').innerHTML = "Medium - 2/0/2";
    document.getElementById('plyoRest1').innerHTML = "60 seconds";
    document.getElementById('plyoCoach1').innerHTML;

    // Resistance
    document.getElementById('resistEx1').innerHTML = "Bench Press";
    document.getElementById('resistSet1').innerHTML = "3";
    document.getElementById('resistReps1').innerHTML = "10";
    document.getElementById('resistTempo1').innerHTML = "Medium - 2/0/2";
    document.getElementById('resistRest1').innerHTML = "60 seconds";
    document.getElementById('resistCoach1').innerHTML;

    document.getElementById('resistEx2').innerHTML = "Lat Pulldown";
    document.getElementById('resistSet2').innerHTML = "3";
    document.getElementById('resistReps2').innerHTML = "10";
    document.getElementById('resistTempo2').innerHTML = "Medium - 2/0/2";
    document.getElementById('resistRest2').innerHTML = "60 seconds";
    document.getElementById('resistCoach2').innerHTML;

    document.getElementById('resistEx3').innerHTML = "Leg Press";
    document.getElementById('resistSet3').innerHTML = "3";
    document.getElementById('resistReps3').innerHTML = "10";
    document.getElementById('resistTempo3').innerHTML = "Medium - 2/0/2";
    document.getElementById('resistRest3').innerHTML = "60 seconds";
    document.getElementById('resistCoach3').innerHTML;

    // Cool-Down

    document.getElementById('coolDownEx1').innerHTML = "Treadmill";
    document.getElementById('coolDownSet1').innerHTML = "1";
    document.getElementById('coolDownTime1').innerHTML = "5 minutes";
    document.getElementById('coolDownCoach1').innerHTML = "Brisk walk";
  }
  // Phase 4
  else if (mainFitGoal === '4' & daysPerWeek === '1' & timePerDay === '2'){
    // Header
    document.getElementById('planHeader').innerHTML = "Phase: 4 Build Strength, Total Body (60 minutes)";

    // Warm-Up
    actStretchRow.classList.remove("ghost");
    document.getElementById('warmUpActEx1').innerHTML = "Active Strech: Calves, Hip Flexors, Lats";
    document.getElementById('warmUpActSet1').innerHTML = "1";
    document.getElementById('warmUpActTime1').innerHTML = "10 reps";
    document.getElementById('warmUpActCoach1').innerHTML = "Hold each strech for 1-2 sec";


    document.getElementById('warmUpEx1').innerHTML = "Treadmill";
    document.getElementById('warmUpSet1').innerHTML = "1";
    document.getElementById('warmUpTime1').innerHTML = "5 minutes";
    document.getElementById('warmUpCoach1').innerHTML = "Brisk walk to slow jog";

    // Core / Balance / Plyometric
    document.getElementById('coreEx1').innerHTML = "Cable Rotations";
    document.getElementById('coreSet1').innerHTML = "2";
    document.getElementById('coreReps1').innerHTML = "8";
    document.getElementById('coreTempo1').innerHTML = "Medium - 2/0/2";
    document.getElementById('coreRest1').innerHTML = "0 seconds";
    document.getElementById('coreCoach1').innerHTML;

    document.getElementById('plyoEx1').innerHTML = "Step-up to balance";
    document.getElementById('plyoSet1').innerHTML = "2";
    document.getElementById('plyoReps1').innerHTML = "8";
    document.getElementById('plyoTempo1').innerHTML = "Medium - 2/0/2";
    document.getElementById('plyoRest1').innerHTML = "60 seconds";
    document.getElementById('plyoCoach1').innerHTML;

    // Resistance
    document.getElementById('resistEx1').innerHTML = "Bench Press";
    document.getElementById('resistSet1').innerHTML = "4";
    document.getElementById('resistReps1').innerHTML = "5";
    document.getElementById('resistTempo1').innerHTML = "Explosive - 1/0/1";
    document.getElementById('resistRest1').innerHTML = "3 minutes";
    document.getElementById('resistCoach1').innerHTML;

    document.getElementById('resistEx2').innerHTML = "Lat Pulldown";
    document.getElementById('resistSet2').innerHTML = "4";
    document.getElementById('resistReps2').innerHTML = "5";
    document.getElementById('resistTempo2').innerHTML = "Explosive - 1/0/1";
    document.getElementById('resistRest2').innerHTML = "3 mintues";
    document.getElementById('resistCoach2').innerHTML;

    document.getElementById('resistEx3').innerHTML = "Barbell Squat";
    document.getElementById('resistSet3').innerHTML = "4";
    document.getElementById('resistReps3').innerHTML = "5";
    document.getElementById('resistTempo3').innerHTML = "Explosive - 1/0/1";
    document.getElementById('resistRest3').innerHTML = "3 minutes";
    document.getElementById('resistCoach3').innerHTML;

    // Cool-Down

    document.getElementById('coolDownEx1').innerHTML = "Treadmill";
    document.getElementById('coolDownSet1').innerHTML = "1";
    document.getElementById('coolDownTime1').innerHTML = "5 minutes";
    document.getElementById('coolDownCoach1').innerHTML = "Brisk walk";

    document.getElementById('coolDownSmrEx1').innerHTML = "SMR: Calves, IT Band, Lats";
    document.getElementById('coolDownSmrSet1').innerHTML = "1";
    document.getElementById('coolDownSmrTime1').innerHTML = "30 seconds";
    document.getElementById('coolDownSmrCoach1').innerHTML = "Hold each tender area for 30 sec";

  }

  // Phase 5
  else if (mainFitGoal === '6' & daysPerWeek === '1' & timePerDay === '2'){
    // Header
    document.getElementById('planHeader').innerHTML = "Phase: 5 Power Athletic Training, Total Body (60 minutes)";

    // Warm-Up
    actStretchRow.classList.remove("ghost");
    document.getElementById('warmUpActEx1').innerHTML = "Active Strech: Calves, Hip Flexors, Lats";
    document.getElementById('warmUpActSet1').innerHTML = "1";
    document.getElementById('warmUpActTime1').innerHTML = "10 reps";
    document.getElementById('warmUpActCoach1').innerHTML = "Hold each strech for 1-2 sec";


    document.getElementById('warmUpEx1').innerHTML = "Treadmill";
    document.getElementById('warmUpSet1').innerHTML = "1";
    document.getElementById('warmUpTime1').innerHTML = "5 minutes";
    document.getElementById('warmUpCoach1').innerHTML = "Brisk walk to slow jog";

    // Core / Balance / Plyometric
    document.getElementById('coreEx1').innerHTML = "Med Ball Rotation Chest Pass";
    document.getElementById('coreSet1').innerHTML = "2";
    document.getElementById('coreReps1').innerHTML = "8";
    document.getElementById('coreTempo1').innerHTML = "Fast - 1/0/1";
    document.getElementById('coreRest1').innerHTML = "0 seconds";
    document.getElementById('coreCoach1').innerHTML;

    document.getElementById('plyoEx1').innerHTML = "Single-leg Hop with Stabilization";
    document.getElementById('plyoSet1').innerHTML = "2";
    document.getElementById('plyoReps1').innerHTML = "8";
    document.getElementById('plyoTempo1').innerHTML = "Medium - 2/0/2";
    document.getElementById('plyoRest1').innerHTML = "60 seconds";
    document.getElementById('plyoCoach1').innerHTML;

    // Resistance
    document.getElementById('resistEx1').innerHTML = "<p>Bench Press</p><p>Med Ball Chest Pass</p>";
    document.getElementById('resistSet1').innerHTML = "4";
    document.getElementById('resistReps1').innerHTML = "<p>5</p><p>10</p>";
    document.getElementById('resistTempo1').innerHTML = "Explosive - 1/0/1";
    document.getElementById('resistRest1').innerHTML = "<p>0 seconds</p><p>2 minutes</p>";
    document.getElementById('resistCoach1').innerHTML = "Superset";

    document.getElementById('resistEx2').innerHTML = "<p>Lat Pull Down</p><p>Woodchop Throw</p>";
    document.getElementById('resistSet2').innerHTML = "4";
    document.getElementById('resistReps2').innerHTML = "<p>5</p><p>10</p>";
    document.getElementById('resistTempo2').innerHTML = "Explosive - 1/0/1";
    document.getElementById('resistRest2').innerHTML = "<p>0 seconds</p><p>2 minutes</p>";
    document.getElementById('resistCoach2').innerHTML = "Superset";

    document.getElementById('resistEx3').innerHTML = "<p>Barbell Squat</p><p>Squat Jump</p>";
    document.getElementById('resistSet3').innerHTML = "4";
    document.getElementById('resistReps3').innerHTML = "<p>5</p><p>10</p>";
    document.getElementById('resistTempo3').innerHTML = "Explosive - 1/0/1";
    document.getElementById('resistRest3').innerHTML = "<p>0 seconds</p><p>2 minutes</p>";
    document.getElementById('resistCoach3').innerHTML = "Superset";

    // Cool-Down

    document.getElementById('coolDownEx1').innerHTML = "Treadmill";
    document.getElementById('coolDownSet1').innerHTML = "1";
    document.getElementById('coolDownTime1').innerHTML = "5-10 minutes";
    document.getElementById('coolDownCoach1').innerHTML = "Brisk walk";

    coolDownTr2.classList.remove("ghost");
    document.getElementById('coolDownSmrEx1').innerHTML = "SMR: Calves, IT Band, Lats";
    document.getElementById('coolDownSmrSet1').innerHTML = "1";
    document.getElementById('coolDownSmrTime1').innerHTML = "30 seconds";
    document.getElementById('coolDownSmrCoach1').innerHTML = "Hold each tender area for 30 sec";

  }

});




console.log(mainFitGoal);
console.log(daysPerWeek);
console.log(timePerDay);
