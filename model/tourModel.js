const fs = require("fs");
const path = require("path");
const toursFilePath = path.join(__dirname, "../data/tour.json");

const getAll = () => {
  const toursData = fs.readFileSync(toursFilePath, "utf-8");
  return JSON.parse(toursData);
};

const getById = (id) => {
  const toursData = getAll();
  return toursData.find((tour) => tour.id === id);
};

const getByquery = (query) => {
  const tours = getAll();
  return tours.filter((tour) => tour.name.includes(query));
};

const save = (tours) => {
  const existingTours = getAll();
  existingTours.push(tours);
  fs.writeFileSync(
    toursFilePath,
    JSON.stringify(existingTours, null, 2),
    "utf-8",
  );
};

const updateTour = (id, updatedTour) => {
  const tours = getAll();
  const index = tours.findIndex((tour) => tour.id === id);
  if (index !== -1) {
    tours[index] = { ...tours[index], ...updatedTour };
    fs.writeFileSync(toursFilePath, JSON.stringify(tours, null, 2), "utf-8");
  }
};

module.exports = {
  getAll,
  getById,
  getByquery,
  save,
  updateTour,
};

// index.js --> routes/tourRoutes.js --> controller/tourController.js --> model/tourModel.js
