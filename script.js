function calculateBMI() {
    // Get the height and weight from the user input fields.
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
  
    // Calculate the BMI.
    const bmi = weight / (height * height);
  
    // Display the BMI result to the user.
    const bmiResult = document.getElementById("bmi-result");
    bmiResult.innerHTML = `Your BMI is ${bmi}.`;
  }