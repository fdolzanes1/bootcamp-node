const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {

  const urlInfo = url.parse(req.url, true);
  const name = urlInfo.query.name;

  if(!name) {
    fs.readFile('pagina.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html'})
      res.write(data);
      return res.end();
    });
  } else {
    const newName = name + '\r\n'
    fs.appendFile("arquivo.txt", newName, (err, data) => {
      res.writeHead(302, {
        Location: '/'
      })
    })
  }
  
});

server.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});