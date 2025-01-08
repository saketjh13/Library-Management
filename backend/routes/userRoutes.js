const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateUserLogin, validateUserRegistration } = require('../middleware/validationMiddleware');

// User registration route
router.post('/register', validateUserRegistration, authController.registerUser);

// User login route
router.post('/login', validateUserLogin, authController.loginUser);

module.exports = router;
