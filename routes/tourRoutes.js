const express = require("express");
const router = express.Router();
const tourController = require("../controller/tourController");

// Router to get all tours
router.get("/tours", tourController.getAllTours);

// Router to get a single tour by ID
router.get("/tours/:id", tourController.getTourById);

// Router to get tours by query
router.get("/tours/search", tourController.getToursByQuery);

router.post("/tours", (req, res) => {
  const newTour = req.body;
  const tours = tourController.getAllTours();
  tour.push(newTour);
  tourController.saveTour(newTour);
  res.status(201).json({ message: "Created!!!" });
});

module.exports = router;

// in postman, use http://localhost:3000/api/tours to get all the tours
