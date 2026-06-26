const authModel = require('../models/authModel');
const authController = require('../controllers/authController');
const express = require('express');
const authRoute = express.Router();


authRoute.post("/",authController.register);


module.exports = authRoute;