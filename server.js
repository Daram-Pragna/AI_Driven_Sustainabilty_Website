const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.post('/submit-form', (req, res) => {
  console.log('Received Data:', req.body);
  res.json({ message: 'Form submitted successfully!' });
});

// Default route for testing
app.get('/', (req, res) => {
  res.send('Server is running. Go to /login.html');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}/login.html`);
});
