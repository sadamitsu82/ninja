var net = require('net');
var server = net.createServer(function(socket) {
    socket.setEncoding('utf8');
    
    socket.on('connect', function() {
       console.log('‚Ù‚Þ‚Ù‚Þ');
    });
});
   
server.listen(3000);
console.log('Server runninng at:3000');