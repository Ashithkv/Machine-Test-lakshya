const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Importing data
const courses = require('./data/courses.json');
const stats = require('./data/stats.json');
const advantages = require('./data/advantages.json');

// Routes
app.get('/api/stats', (req, res) => {
  res.json(stats);
});

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.get('/api/advantages', (req, res) => {
  res.json(advantages);
});

// Server listening
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
