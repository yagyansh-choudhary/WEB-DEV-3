const fs = require("fs");
const path = require("path");
const toursFilePath = path.join(__dirname, "../data/tours.json");

const getAll = () => {
  const toursData = fs.readFileSync(toursFilePath, "utf-8");
  return JSON.parse(toursData);
};

const getById = (id) => {
  const tours = getAll();
  return tours.find((tour) => tour.id === id);
};

const getByQuery = (query) => {
  const tours = getAll();
    return tours.filter((tour) => tour.name.includes(query));
};

const save = (newTour)=>{
  const tours = getAll();
  tours.push(newTour);
  fs.writeFileSync(toursFilePath,JSON.stringify(tours));
}

module.exports = {
  getAll,
  getById,

};

// index.js --> routes/tourRoutes.js --> controller/tourController.js --> model/tourModel.js
