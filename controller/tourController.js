const tourModel = require("../model/tourModel");

// Get all tours
const getAllTours = (req, res) => {
  const tours = tourModel.getAll();
  res.json(tours);
};

// Get a single tour by ID
const getTourById = (req, res) => {
  const tour = tourModel.getById(req.params.id);

  if (!tour) {
    return res.status(404).json({ message: "Tour not found" });
  }

  res.json(tour);
};

// Get tours by query
const getTourByquery = (req, res) => {
  const query = req.query.name;
  const tours = tourModel.getByquery(query);
  res.json(tours);
};

// Save tours
const saveTours = (req, res) => {
  const tours = req.body;
  tourModel.save(tours);
  res.status(201).json(tours);
};

// Update tour
const updateTours = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  tourModel.updateTour(id, data);

  res.json({ message: "Tour updated successfully" });
};

module.exports = {
  getAllTours,
  getTourById,
  getTourByquery,
  saveTours,
  updateTours,
};
