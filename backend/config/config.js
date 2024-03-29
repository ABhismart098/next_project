

const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables from .env file

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT || 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'your_database',
});

module.exports = sequelize;
