const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Define models
const Person = require('./models/person');
const MenuItem = require('./models/Menu');

// Use body-parser middleware
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to our hotel! How can I help you?');
});


// import thr router file
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');

app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

// Start server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

