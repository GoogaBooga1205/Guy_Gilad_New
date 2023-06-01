//import and setup
const express = require('express');
const app = express();
const path = require('path');
const port = 2023;
app.use(express.static(path.join(__dirname,'HW7')));

//routing

app.get('/', (req, res)=>{
 
res.sendFile(path.join(__dirname,'views/index.html'))
});

app.get('/formhandler', (req,res)=>{
    res.send("Thank You");
});

//set up listen
app.listen(port, ()=>{
    console.log("server is running on port",port)
});