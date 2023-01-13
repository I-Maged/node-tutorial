const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    let link;

    if (req.url === '/') {
      link = 'index.html';
    } else if (req.url === '/about') {
      link = 'about.html';
    } else if (req.url === '/contact-me') {
      link = 'contact-me.html';
    } else {
      link = '404.html';
    }

    fs.readFile(link, function (err, data) {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end;
    });
  })
  .listen(8080, () => {
    console.log('Listeninig on port  8080');
  });
