//import and init
const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
app.use(express.static(path.join(__dirname, "static")));

//routing
app.get('/',(req, res)=>{
res.send("hi express");
});

app.get('/page2', (req, res)=>{
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get('/page3', (req, res)=>{
    res.sendFile(path.join(__dirname, "views/page3.html"));
});

app.get('/',(req,res)=>{
    console.log('this is the query:',req.query);
    res.sendFile(path.join(__dirname, "views/page4.html"));
});

app.get('/formhandler', (req,res)=>{
var x= req.query;
res.send(x);
});

//set up listen
app.listen(port, ()=>{
    console.log("server is runnig on port", port);
});