const tourModel = require('../model/tourModel');

// Get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
};

const getTourById = (req , res) => {
    // const id = parseInt(req.params.id);
    const query = req.query.name;
    const tour = tourModel.getbyQuery(id);
    if(!tour){
        return res.status(404).json({ message: 'Tour not found'});
    }
    res.json(tour);
};

const saveTours = (tours) =>{
    tourModel.save(tour)
}
module.exports = {
    getAllTours,
    getTourById
};