const SQL = require('./DB');

const createTable = (req,res)=>{
    const Q1 = "CREATE TABLE usersAA (id INT PRIMARY KEY, name VARCHAR(255), password VARCHAR(255));";
    SQL.query(Q1,(err,mysqlres)=>{
        if(err) {
            console.log(err);
            res.send(err);
            return;
        }
        console.log("table created");
        res.send('table created');
        return;
    })
};

module.exports={createTable};