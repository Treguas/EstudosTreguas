/* eslint-disable linebreak-style */
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'content-Type': 'text/plain' });
  res.end('Hello World');
}).listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is running port 3000');
  }
});
