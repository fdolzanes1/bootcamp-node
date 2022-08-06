const fs = require('fs');

fs.rename('arquivo.txt', 'novo_arquivo.txt',(err, file) => {
  if (err) {
    console.error(err);
    return
  }
  console.log('Arquivo Renomeado')
});