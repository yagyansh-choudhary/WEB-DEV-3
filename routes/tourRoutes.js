const express = require("express");
const router = express.Router();
const tourController = require("../controller/tourController");
const tourModel = require("../model/tourModel");

// Router to get all tours
router.get("/tours", tourController.getAllTours);

router.get("/tours/search", tourController.getTourByquery);
router.get("/tours/:id", tourController.getTourById);

router.post("/tours", tourController.saveTours);
module.exports = router;

// in postman, use http://localhost:3000/api/tours to get all the tours
