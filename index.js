const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const port = 8080;

app.use(express.static('resources'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('pagini/index.ejs');
});

app.get('/*', (req, res) => {
  const filePath = path.join(__dirname, "views/pagini", req.path);

  // if (!fs.existsSync(filePath)) return res.sendStatus(404);

  res.render(filePath, undefined, (err, html) => {
    if (err && err.message.includes("Failed to lookup view"))
      res.sendStatus(404);
    
    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`Serverul rulează pe portul ${port}.`);
  console.log(`Calea folderului curent este: ${__dirname}`);
  console.log(`Calea fișierului index.js este: ${__filename}`);
  console.log(`Folderul curent de lucru este: ${process.cwd()}`);
});

