$(function(){
 var socket = new io.connect("/");

 socket.on("connect", function(){
 $("#transportName").text("connect via " + socket.socket.transport.name);// �ڑ����ɐڑ������\��
 });

 socket.on("message", function(message){
 $("<li>").text(message).prependTo($("#messageArea ul"));// ��M���b�Z�[�W�������_�����O
 });

 $("#submitButton").click(function(event){
 socket.emit("message", {message: $("#msg").val()});// ���̓��b�Z�[�W���T�[�o��
 });
 });
