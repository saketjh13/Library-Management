// utils/generateToken.js

const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '30d', // You can change the expiration time as needed
  });
};

module.exports = generateToken;
