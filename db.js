const mongoose = require('mongoose');

// define MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/mydatabase'; // mydatabase is the name of the database

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true // typo fixed: userUnifiedTopology -> useUnifiedTopology
});

// get the default connection
const db = mongoose.connection;

// Default event listeners for database connection
db.on('connected', () => {
  console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
  console.log('Error connecting to MongoDB:', err);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB server');
});

// export database connection
module.exports = db;