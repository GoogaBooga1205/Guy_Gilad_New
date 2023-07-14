const path = require('path');
const sql = require('./DB');
const cookie = require('cookie-parser');
const csvtojson = require('csvtojson');
const createTable = (req, res) => {
    const Q1 = 'CREATE TABLE IF NOT EXISTS `TableA` (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, email varchar(255) NOT NULL, name varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8';
    sql.query(Q1, (err, mysqlres) => {
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.send("hi" + mysqlres);
        console.log("found table");
        return;
    })
};

const InsertData = (req, res) => {
    var NewData = {
        name: "A Name",
        email: "email@gmail.com"
    };
    const csvFilePath = path.join(__dirname, "data.csv");
    //this is new
    csv().fromFile(csvPath).then((jsonObj) => {
        console.log(jsonObj);
        for (let i = 0; i < jsonObj.length; i++) {
            const element = jsonObj[i];
            console.log(element);

        }
        jsonObj.forEach(element => {
            var NewEntry = {
                "name": element.name,
                "email": element.email
            }
            SQL.query(Q3, NewEntry, (err, mysqlres) => {
                if (err) {
                    console.log("error in inserting data", err);
                }
                console.log("created row sucssefuly ");
            });
        });
    });

    res.send("data inserted");

};

const dropTable = (req, res) => {
    const Q2 = 'DROP TABLE `TableA`;';
    sql.query(Q2, (err, mysqlres) => {
        if (err) {
            console.log(err);
            res.status(400).send("cannot find users");
            return;
        }
        res.send("table dropped");
        console.log("table dropped");
        return;
    })
};

const createNewUser = (req, res) => {
    //res.send(req.query);
    // validate info exists

    // pull info from req.query to json object
    const NewSignUp = {
        email: req.query.UserEmail,
        name: req.query.UserName
    };
    // run insert query
    const Q4 = "INSERT INTO SignUps SET ?";
    sql.query(Q4, NewSignUp, (err, mysqlres) => {
        if (err) {
            console.log(err);
            res.send("something went wrong");
            return;
        }

        res.cookie("nameUser", req.query.UserName);
        res.redirect("/activeUser");
        return;
    });
};

const searchUser = (req, res) => {
    // get cookie
    const activeUser = req.cookies.name_user;

    // validate body exists
    if (!req.body) {
        res.status(400).send("cannot serch user - content cannot be empty");
        return;
    };
    // cretae json object for query
    const searchName = req.body.searchName;
    // sql query syntax
    const Q2 = 'SELECT * FROM SignUps where name like ?';
    // run query
    sql.query(Q2, searchName + "%", (err, mysqlres) => {
        if (err) {
            console.log(err);
            res.status(400).send('cannot find user');
            return;
        }
        res.send(mysqlres);
        console.log("active user is");
        return;
    });
};

const selectAllUsers = (req, res) => {
    const Q3 = 'select * from SignUps';
    sql.query(Q3, (err, mysqlres) => {
        if (err) {
            console.log(err);
            res.status(400).send("cannot find users");
            return;
        }
        res.send(mysqlres);
        console.log("found table");
        return;
    })
};





module.exports = { createNewUser, searchUser, selectAllUsers, createTable, dropTable }