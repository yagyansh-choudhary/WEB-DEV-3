const fs = require('fs');
const path = require('path');
const tourFilePath = path.join(__dirname, '../data/tours.json');

const getAll = ()=>{
    const toursData = fs.readFileSync(toursFilePath, 'utf-8');
    return JSON.parse(toursData);
}

const getById = (id)=>{
    const tours = getAll();
    return tours.find(tour => tour.id === id);
}

const getbyQuery = (query)=>{
    const tours = getAll();
    return tours.filter(tour => tour.name.includes(query))
}


const save = (tours)=>{
    fs.writeFileSync(toursFilePath, JSON.stringify(tours,null))
}
module.exports = {
    getAll,
    getById, 
    getbyQuery
};
