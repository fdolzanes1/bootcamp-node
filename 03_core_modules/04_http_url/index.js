const http = require('http');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
  
  const urlInfo = url.parse(req.url, true);
  const name = urlInfo.query.name;


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  if (!name) {
    res.end('<h3>Preencha o seu nome: </h3><form method="GET"><input type="text" name="name"/><input type="submit" value="Enviar"></form>');
  } else {
    res.end(`<h3>Seja bem vindo ${name}`)
  }

});

server.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});