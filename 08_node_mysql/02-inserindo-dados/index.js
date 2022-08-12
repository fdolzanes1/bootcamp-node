const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.listen(3000, () => {
  console.log("Servidor Iniciado")
});

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello' });
});

app.post('/books/', (req, res) => {
  const title = req.body.title;
  const page = req.body.page;

  const query = `INSERT INTO books (title, page) VALUES ('${title}', '${page}')`;

  conn.query(query, (err) => {
    if (err) {
      res.status(400).send({ message: err });
    };
    res.status(201).send({ message: "Book adicionado com sucesso" });
  })
});
