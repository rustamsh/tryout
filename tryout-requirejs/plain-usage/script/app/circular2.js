define(function(require, exports, module) {

	

	return {
		print: function() {
			console.log("printed circular2")
		},
		usecircular: function() {
			var circular = require("app/circular");
			console.log("call from circular2");
			circular.print();
		}
	}
});