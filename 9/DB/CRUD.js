const sql = require('./DB')
const path = require('path');

const createNewUser = (req, res)=>{
};

const searchUser = (req,res)=>{
    //validate body exists
        if (!req.body) {
        res.status(400).send({message: "cant search User - content can not be empty"});
        return;
        }};
    //create json oblect for query
        const Q2 = req.body.searchName;
    // sql syntax
    sql.query("SELECT * FROM SignUps where name like ?");
    //run query
    sql.query(Q2, searchName + "%", (err, mysqlres)=>{
    if (err){
        console.log(err);
        res.status(400).send('cannot find user');
        return;
        }
    res.send(mysqlres);
    console.log("found user");
    });

module.exports = {createNewUser, searchUser};