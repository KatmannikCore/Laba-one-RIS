const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  
  const phone = require("./phoneNumber.js");
  const del = require('./delete.js');  
  
  console.log(phone.createPhoneNumber([1,2,9,4,5,6,7,8,9]))
  console.log(del.arrayDiff([1,2,3,4,4,4,4,5,6,6], [2,4]))

});