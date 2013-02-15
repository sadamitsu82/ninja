var io = require('socket.io-client');
var url = "localhost";
var options = {
    'force new connection':true,
    port:3000
};

//�ő�ڑ����[�U��
var maxConnect = 5;
//�ڑ����Ă��郆�[�U��
var connectCounter = 0;
 
var socket;
for(var i = 0 ;i < maxConnect; i++) {
    socket = io.connect(url, options);
    socket.on('connect', function (data) {
        connectCounter += 1;
        console.log("connect. connectCounter=" + connectCounter);
    });
 
    socket.on('sendMsgFromServer', function (msg) {
        console.log("message:",msg);
    });
}
 
setTimeout(function(){
    socket.emit("sendMsgFromClient","send client msg");
},3000);