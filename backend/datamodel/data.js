

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); // Create a separate file for database configuration

const School = sequelize.define('School', {
  schoolName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagePath: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = School;
