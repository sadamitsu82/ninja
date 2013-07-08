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
	  // iPhone4�͂��ׂĎ擾�ł��܂��B
	  // iPhone3GS�̏ꍇ��acceleration�ArotationRate�̓R�����g�A�E�g���Ă��������B
	  var ac = evt.acceleration;
	  x.text(ac.x); //x�����̌X�������x
	  y.text(ac.y); //y�����̌X�������x
	  z.text(ac.z); //z�����̌X�������x
	  
	  var acg = evt.accelerationIncludingGravity;
	  xg.text(acg.x); //x�����̌X���d�͉����x
	  yg.text(acg.y); //y�����̌X���d�͉����x
	  zg.text(acg.z); //z�����̌X���d�͉����x
	  
	  var rr = evt.rotationRate;
	  a.text(rr.alpha); //z���̉�]�����x
	  b.text(rr.beta); //x���̉�]�����x
	  g.text(rr.gamma); //y���̉�]�����x
	});
	
	/*
	window.addEventListener('deviceorientation', function(event) {
	  a.text(event.alpha); //z���̉�]�����x
	  b.text(event.beta); //x���̉�]�����x
	  g.text(event.gamma); //y���̉�]�����x
	});
	*/


 });
