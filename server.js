var http = require('http');
//�T�[�o�C���X�^���X�쐬
var server = http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('server connected');
});
var io = require('socket.io').listen(server);
var counter = 0;//�ڑ����̃J�E���^
server.listen(3000);//3000�ԃ|�[�g�ŋN��
 
//�ڑ��m�����̏���
io.sockets.on('connection', function (socket) {
    counter++;
    console.log("counter:" + counter);
    //sendMsgFromClient�C�x���g���󂯂��烁�b�Z�[�W���u���[�h�L���X�g
    socket.on('sendMsgFromClient', function(msg) {
        io.sockets.emit('sendMsgFromServer', '[Hello From Server]msg=' + msg);
    });
    //�ؒf���̏���
    socket.on('disconnect', function () {
        //disconnect
        counter--;
        console.log('disconnect.cout: ',counter);
    });
});