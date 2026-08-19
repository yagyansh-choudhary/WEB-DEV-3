const express = require('express');
const router = express.router();
const tourController = require('../controller/tourController');

//Route to get all tours
router.get('/tours', tourController.getAllTours);