const express = require('express');
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log(`Serverul rulează pe portul ${port}.`);
  console.log(`Calea folderului curent este: ${__dirname}`);
  console.log(`Calea fișierului index.js este: ${__filename}`);
  console.log(`Folderul curent de lucru este: ${process.cwd()}`);
});

