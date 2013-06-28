window.onload=function(){
		var flashvars = {};
		var params = {allowscriptaccess: "always"};
		var attributes = {};
		swfobject.embedSWF("/swf/index.swf", "contents", "200", "200", "10", "", flashvars, params, attributes);
		var flashvars2 = {};
		var params2 = {allowscriptaccess: "always"};
		var attributes2 = {};
		swfobject.embedSWF("/swf/index2.swf", "contents2", "200", "200", "10", "", flashvars2, param2s, attributes2);
};