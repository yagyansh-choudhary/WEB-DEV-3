const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

//Route to get all tours
router.get('/tours', tourController.getAllTours);

//Route to get a specific tour by ID
router.get('tours/:id', tourController.getTourById);

router.get('/tours/search' , tourController.getTourById)

module.exports = router; 