define(["jquerypluginuser"], function(jquerypluginuser) {
	return {
		print: function() {
			console.log("printed from foo: begin");
			jquerypluginuser.callPlugin();
			console.log("printed from foo: end");
		}
	}
});