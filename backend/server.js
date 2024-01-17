// server.js

require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const routes = require('./route/route');
const sequelize = require('./config/config'); // Import the database configuration
const School = require('./datamodel/data'); // Import the Sequelize model

const app = express();
const port = 3001;

// Configure middleware for handling JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure multer for handling file uploads
const storage = multer.diskStorage({
  destination: 'public/schoolImages',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Use routes
app.use('/api', routes);

// Sync Sequelize model with the database
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
