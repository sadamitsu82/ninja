window.onload=function(){
		var flashvars = {};
		var params = {allowscriptaccess: "always"};
		var attributes = {};
		swfobject.embedSWF("/swf/index.swf", "contents", "200", "200", "10", "", flashvars, params, attributes);
};