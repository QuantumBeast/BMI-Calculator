function calculateBMI() {
    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const feet = parseFloat(document.getElementById('feet').value);
    const inches = parseFloat(document.getElementById('inches').value);
    
    // Validate input values
    if (isNaN(weight) || isNaN(feet) || isNaN(inches)) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    // Convert height to meters
    const heightInMeters = (feet * 0.3048) + (inches * 0.0254);

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);
    
    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your BMI is <strong>${bmi.toFixed(2)}</strong>, which is considered <strong>${category}</strong>.`;
}