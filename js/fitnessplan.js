let heightFt = document.getElementById('height_ft').value;
    heightIn = document.getElementById('height_in').value;
    height = parseFloat(heightFt * 12) + parseFloat(heightIn);
    weight = document.getElementById('weight_lb').value;
    BMI = calculateBMI(height, weight);

function calculateBMI(height, weight) {
  let BMI = (weight / (height * height)) * 703

return Math.round(BMI * Math.pow(10, 2)) / Math.pow(10, 2);
}
console.log(BMI);