const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello' });
});

var conn = mysql.createConnection({
  database: "dbnode",
  host: "localhost",
  user: "mysql",
  password: "root"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the MySQL");
});

