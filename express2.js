const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dns = require('dns');
require('dotenv').config();

dns.setServers(['8.8.8.8']); // Use Google's public DNS

MONGODB_URL=process.env.DB_URL;

// Connect to MongoDB
mongoose.connect(MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000 })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define models
const Person = require('./models/person');
const MenuItem = require('./models/Menu');

// Use body-parser middleware
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to our hotel! How can I help you?');
});

// Import router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

const PORT= process.env.PORT || 3000;

// Start server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');



// // Connect to MongoDB
// //mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connect('mongodb+srv://sujeetkale2001:sujeetkale@cluster0.d23qxdl.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// //const mongoURL='mongodb+srv://sujeetkale2001:sujeetkale@cluster0.d23qxdl.mongodb.net/'

// // Define models
// const Person = require('./models/person');
// const MenuItem = require('./models/Menu');

// // Use body-parser middleware
// app.use(bodyParser.json());

// // Define routes
// app.get('/', (req, res) => {
//   res.send('Welcome to our hotel! How can I help you?');
// });


// // import thr router file
// const personRoutes=require('./routes/personRoutes');
// const menuItemRoutes=require('./routes/menuItemRoutes');

// app.use('/person',personRoutes);
// app.use('/menu',menuItemRoutes);

// // Start server
// app.listen(3000, () => {
//   console.log('Listening on port 3000');
// });

