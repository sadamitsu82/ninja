var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(process.argv[2]);
}).listen(process.env.listenport);


console.log("tests 888");