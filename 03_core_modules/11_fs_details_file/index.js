const fs = require('fs');

fs.stat('novo_arquivo.txt', (err, data) => {
  if(err) {
    console.log(err);
    return
  }

  console.log(data.isFile());
  console.log(data.isDirectory());
  console.log(data.isSymbolicLink());
  console.log(data.ctime);
  console.log(data.size);

  console.log(data.dev);

})