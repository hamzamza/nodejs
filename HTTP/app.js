const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') res.end('welcome to our home page');
  else if (req.url == '/about') res.end('this is about section');
  else {
    res.end(`
  <h1 class="text-danger">Oops ! </h1>
<p> error 404 </p>
<a href="/">home page</a>
  `);
  }
  //   we dont have contact directory
});
server.listen(5000);
