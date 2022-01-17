const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  database: "payment",
  user: "root",
  password: "",
});

module.exports = con;
