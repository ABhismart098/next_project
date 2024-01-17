// controllers/schoolController.js

const School = require('../datamodel/data');

const addSchool = async (req, res) => {
  const { schoolName, email } = req.body;
  const imagePath = req.file.filename;

  // Save school data to the database (replace this with your actual database logic)
  // Example: await School.create({ schoolName, email, imagePath });

  res.json({ success: true });
};

const getSchools = async (req, res) => {
  // Retrieve schools from the database (replace this with your actual database logic)
  // Example: const schools = await School.find();

  const dummyData = [
    { id: 1, name: 'School 1', address: 'Address 1', city: 'City 1', image: 'school1.jpg' },
    { id: 2, name: 'School 2', address: 'Address 2', city: 'City 2', image: 'school2.jpg' },
    // Add more schools as needed
  ];

  res.json(dummyData);
};

module.exports = {
  addSchool,
  getSchools,
};
