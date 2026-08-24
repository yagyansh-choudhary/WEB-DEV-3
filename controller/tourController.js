const tourModel = require("../model/tourModel");

// Get all tours
const getAllTours = (req, res) => {
  const tours = tourModel.getAll();
  res.json(tours);
};

// // Get a single tour by ID
const getTourById = (req, res) => {
  const tour = tourModel.getById(req.params.id);
  if (!tour) {
    return res.status(404).json({ message: "Tour not found" });
  }
  res.json(tour);
};

// const getTourById = (req, res) => {
//     const tourId = parseInt(req.params.id);
//     const tour = tourModel.getById(tourId);
//     res.json(tour);
// };

const getToursByQuery = (req, res) => {
  const query = req.query.name;
  const tours = tourModel.getByQuery(query);
  res.json(tours);
};

const saveTour = (req, res) => {
  tours = req.body;
  tourModel.save(tours);
  res.status(201).send.json()
};

module.exports = {
  getAllTours,
  getTourById,
  getToursByQuery,
  saveTours,
};
