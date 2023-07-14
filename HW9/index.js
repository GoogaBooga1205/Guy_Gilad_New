//import and setup
const express = require('express');
const app = express();
const path = require('path');
const port = 1009;
const bodyParser = require('body-parser');
const createDB = require('./DB/CRUD');
const sql = require('./DB/DB');
//connecting to static folder for css and js
app.use(express.static(path.join(__dirname, 'static')));

//body parser reset
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');

//routing
app.get('/', (req, res) => {
    res.send("hi");
});

// here you create the DB
app.get('/createTable', createDB.createTable)
app.get('/dropTable', createDB.dropTable)

//set up listen
app.listen(port, () => {
    console.log("server is running on port", port)
});