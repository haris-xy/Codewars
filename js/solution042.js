/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
    let calBmi = (weight / (height*height))
    return calBmi <= 18.5 ? "Underweight"
    :  calBmi <= 25.0 ? "Normal"
    :  calBmi <= 30.0 ? "Overweight"
    :  "Obese"
  }