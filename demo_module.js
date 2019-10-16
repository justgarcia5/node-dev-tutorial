const http = require('http');

const dt = require('./myfirstmodule');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time is currenty: " + dt.myDateTime());
  res.end();
}).listen(8080)
