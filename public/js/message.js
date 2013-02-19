$(function(){
 var socket = new io.connect("/");

 socket.on("connect", function(){
 $("#transportName").text("connect via " + socket.socket.transport.name);// 接続時に接続方式表示
 });

 socket.on("message", function(message){
 $("<li>").text(message).prependTo($("#messageArea ul"));// 受信メッセージをレンダリング
 });

 $("#submitButton").click(function(event){
 socket.emit("message", {message: $("#msg").val()});// 入力メッセージをサーバへ
 });
 });
