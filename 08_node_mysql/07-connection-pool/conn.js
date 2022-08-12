const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit : 10,
  database: 'dbnode',
  host: "localhost",
  user: "mysql",
  password: "root"
});



module.exports = pool;