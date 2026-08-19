const fs = require('fs');
const path = require('path');
const tourFilePath = path.join(__dirname, '../data/tours.json');

const getAll = ()=>{
    const toursData = fs.readFileSync
    (toursFilePath, 'utf-8');
    return JSON.parse(toursData);
}

const getById = (id)=>{
    const tours = getAll();
    return tours.find(tour => tour.id === id);
}

module.exports = {
    getAll,
    getById
};