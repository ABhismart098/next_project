const express = require('express');
const router = express.Router();
const schoolController = require('../controller/controller');

// API endpoint for adding a school
router.post('/addSchool', schoolController.addSchool);

// API endpoint for getting a list of schools
router.get('/getSchools', schoolController.getSchools);

module.exports = router;
