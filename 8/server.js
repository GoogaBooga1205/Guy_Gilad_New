//import and setup
const express = require('express');
const app = express();
const path = require('path');
//const mysql2 = require('path'); 
const port = 2023;
app.use(express.static(path.join(__dirname,'8')));

//routing
app.get('/', (req, res)=>{
    //res.send("Dont Forget To LeTaprer")
res.sendFile(path.join(__dirname,'views/index.html'))
});

app.get('/formhandler', (req,res)=>{
res.send(req.query);
});

//set up listen
app.listen(port, ()=>{
    console.log("server is running on port",port)
});