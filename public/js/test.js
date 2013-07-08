$(function(){
	var x = $('#x');
	var y = $('#y');
	var z = $('#z');
	var xg = $('#xg');
	var yg = $('#yg');
	var zg = $('#zg');
	var a = $('#a');
	var b = $('#b');
	var g = $('#g');
	
	window.addEventListener('devicemotion', function(evt) {
	  // iPhone4はすべて取得できます。
	  // iPhone3GSの場合はacceleration、rotationRateはコメントアウトしてください。
	  var ac = evt.acceleration;
	  x.text(ac.x); //x方向の傾き加速度
	  y.text(ac.y); //y方向の傾き加速度
	  z.text(ac.z); //z方向の傾き加速度
	  
	  var acg = evt.accelerationIncludingGravity;
	  xg.text(acg.x); //x方向の傾き重力加速度
	  yg.text(acg.y); //y方向の傾き重力加速度
	  zg.text(acg.z); //z方向の傾き重力加速度
	  
	  var rr = evt.rotationRate;
	  a.text(rr.alpha); //z軸の回転加速度
	  b.text(rr.beta); //x軸の回転加速度
	  g.text(rr.gamma); //y軸の回転加速度
	});
	
	/*
	window.addEventListener('deviceorientation', function(event) {
	  a.text(event.alpha); //z軸の回転加速度
	  b.text(event.beta); //x軸の回転加速度
	  g.text(event.gamma); //y軸の回転加速度
	});
	*/


 });
