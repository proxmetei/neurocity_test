const http = require('http');
const os = require('node:os');
let fs = require('fs');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(os.type());
  console.log(os.homedir());
  let fileContent = fs.readFileSync('file.txt', 'utf8');
  fs.writeFileSync('file1.txt',fileContent.split('').reverse().join(''));
});