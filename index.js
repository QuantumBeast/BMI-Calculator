console.log('Server is starting...');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize the Express app
const app = express();

// Use body-parser to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// BMI Calculation Route
app.post('/calculate-bmi', (req, res) => {
  const { weight, feet, inches } = req.body;

  // Convert height from feet and inches to meters
  const heightInMeters = ((feet * 12 + inches) * 0.0254).toFixed(2);
  
  // Convert weight to kilograms
  const weightInKg = weight * 0.453592;

  // Calculate BMI
  const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);

  // Determine BMI category
  let category = '';
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  // Send response back to the front-end
  res.json({ bmi, category });
});

// Change port to 4000
const PORT = process.env.PORT || 4000;  // Updated to 4000

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

