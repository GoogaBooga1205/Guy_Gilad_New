const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
const port = 2023;
const SQL = require('./DB/DB');
const createDB = require('./DB/CreateDB_CRUD')
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


//routing
app.get('/',(req,res)=>{
    res.send("Hi DB")
})

//set up listen
app.listen(port, ()=>{
    console.log("server is running on port:",port);
})