const authModel = require('../models/authModel');
const authController = require('../controllers/authController');
const express = require('express');
const authRoute = express.Router();


authRoute.post("/register",authController.register);
authRoute.post("/login",authController.login);

module.exports = authRoute;