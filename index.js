// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize the Express app
const app = express();

// Set the port to 3000 (or any other port you prefer)
const port = 3000;

// Serve static files (like CSS, JS) from the root directory
app.use(express.static(__dirname)); // This serves static files from the root directory

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(bodyParser.urlencoded({ extended: true }));

// Handle GET request for the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Serve the index.html file
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
