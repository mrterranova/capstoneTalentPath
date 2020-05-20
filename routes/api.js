
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const router = express.Router();

router.use(bodyParser.json());

let dbConfig = require("../config/keys");
let connection = mysql.createConnection(dbConfig);


router.get("/checkCurrDB", (req, res) => {
  res.send(dbConfig);
  console.log(dbConfig);
});


router.get("/getAllTablesNames", (req, res) => {
  let query = `SELECT table_name FROM information_schema.tables WHERE table_schema =${dbConfig.database}`;
  let output = connection.query(query, (err, result) => {
    if (err) {
      return null; //removing the return
    } else {
      return res.json({
        data: result.reverse()
      });
    }
  });
});


router.post("/post_Database", (req, res) => {
  let newInsert = {
    AppName: req.body.name,
    host: req.body.host,
    user: req.body.user,
    passwd: req.body.password,
    databaseName: req.body.database
  }
  let query = "INSERT INTO DatabaseKeys SET ?";
  let output = connection.query(query, newInsert, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(newInsert);
    }
  });
});


router.get("/getCategoryList/:UserID", (req, res) => {
  let query = `SELECT * FROM bookmarktest.categorylist WHERE UserID = ${
    req.params.UserID
  };`;
  let output = connection.query(query, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: result
      });
    }
  });
});


router.delete("/delete/:ID", (req, res) => {
  let query = `DELETE FROM bookmarks WHERE BookmarkID = ${
    req.params.ID
  }`;
  let output = connection.query(query, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      console.log(result);
      return res.send("Delete has been made");
    }
  });
});


router.get("/createDB/:DatabaseName", (req, res) => {
  let query = `CREATE DATABASE ${req.params.DatabaseName};`;
  let output = connection.query(query, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Database Created");
    }
  });
});

/*
  Create Table
*/
router.get("/createTable/:TableName", (req, res) => {
  let query =
    `CREATE table ${req.params.TableName} (id int NOT NULL AUTO_INCREMENT, name VARCHAR(50), cost int, PRIMARY KEY (id));`;
  let output = connection.query(query, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Table Created");
    }
  });
});

module.exports = router;
