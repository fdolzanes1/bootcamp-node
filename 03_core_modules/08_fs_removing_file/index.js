const fs = require('fs');

fs.unlink('arquivo.txt', (err, file) => {
  if (err) {
    console.error(err);
    return
  }
  console.log('Arquivo Removido')
});