const express = require ('express');
const app = express();

const packages = require("./tour");

app.get('/',(req,res)=>{
    res.send("hello world");
});

app.get("/packages",(req,res)=>{
    res.json(packages);
});

app.get("/pakages/:id",(req,res)=>{
    const packageId = parsInt(req.params.id);
    const selectedpackage = packages.find(item => item.id === packageId);
    res.json(selectedpackage);
});
app.listen(3000,()=>{
    console.log("server is running on 3000");
});                                                       