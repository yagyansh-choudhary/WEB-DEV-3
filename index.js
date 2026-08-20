const express = require('express');
const app = express();

const tourRoutes = require('./routes/tourRoutes');

app.use(express.json());

app.use('/api', tourRoutes);



app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});