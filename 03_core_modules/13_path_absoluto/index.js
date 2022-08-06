const path = require('path');

console.log(path.resolve('novo_arquivo.txt'));

const midFolders = 'relatorios';
const fileName = 'arquivo.txt';

const finalPath = path.join('/', 'arquivos', midFolders, fileName);

console.log(finalPath);