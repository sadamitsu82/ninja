var http = require('http');
//サーバインスタンス作成
var server = http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('server connected');
});
var io = require('socket.io').listen(server);
var counter = 0;//接続数のカウンタ
server.listen(3000);//3000番ポートで起動
 
//接続確立時の処理
io.sockets.on('connection', function (socket) {
    counter++;
    console.log("counter:" + counter);
    //sendMsgFromClientイベントを受けたらメッセージをブロードキャスト
    socket.on('sendMsgFromClient', function(msg) {
        io.sockets.emit('sendMsgFromServer', '[Hello From Server]msg=' + msg);
    });
    //切断時の処理
    socket.on('disconnect', function () {
        //disconnect
        counter--;
        console.log('disconnect.cout: ',counter);
    });
});