// write your code here
var http = require("http");

console.log("Listening on port 8080")

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
    console.log("get request made.")
  }).listen(8080);

  