"user strict";

var mysql = require("mysql");

//local mysql db connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "todo",
});
// connect to database
connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
