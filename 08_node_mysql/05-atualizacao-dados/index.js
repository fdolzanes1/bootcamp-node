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

app.get('/books', (req, res) => {
  const query = `SELECT * FROM books`;

  conn.query(query, (err, data) => {
    if (err) {
      res.status(400).send({ message: err });
    };
    res.status(201).send({ message: data });
  })

});

app.get('/books/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM books WHERE id = '${id}'`;

  conn.query(query, (err, data) => {
    if (data.length == 0) {
      res.status(500).send({ message: "Book nao encontrado" });
      return
    }
    if (err) {
      res.status(400).send({ message: err });
      return
    };
    res.status(201).send({ message: data });
  })

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

app.put('/books/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM books WHERE id = '${id}'`;

  const { title, page } = req.body;

  conn.query(query, (err, data) => {
    if (data.length == 0) {
      res.status(500).send({ message: "Book nao encontrado" });
      return
    }
    if (err) {
      res.status(400).send({ message: err });
      return
    };

    conn.query(`UPDATE books SET title = '${title}', page = '${page}' WHERE id = '${id}'`, (err, data) => {
      if (err) {
        res.status(400).send({ message: err});
        return
      }

      return res.status(200).send({ message: "Book atualizado"});
    });
  });

});
