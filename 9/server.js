//import and setup
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const sql = require('./DB/DB')
const port = 2023;
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'views')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//routing
app.get('/', (req, res)=>{
res.sendFile(path.join(__dirname,'views/index.html'))
});
app.get('/formA', CRUD.createNewUser);

app.post('/formB', CRUD.searchUser)

app.get('/formhandler==', (req,res)=>{
    //pull info
    const NewSignUp = {
        email: req.query.UserEmail,
        name: req.query.UserName
    }});
    //run insert query
    const Q1 = "INSERT INTO SignUps SET ?";
   // sql.query(Q1, NewSignUp, (err,mysqlres)=>{
    //    if (err){
     //       console.log(err);
     //       res.send("something went wrong");
     //       return;
      //  }
      //  req.send("thank you!");
      //  return;  
    //});
//res.send(req.query);
//});

//set up listen
app.listen(port, ()=>{
    console.log("server is running on port",port)
});