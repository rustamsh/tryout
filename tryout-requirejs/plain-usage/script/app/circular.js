define(["app/circular2", "app/circularfail"], function(circular2, fail, require, exports, module) {
	circular2.print();

	//throws an exception because circular is not loaded yet
	//circular2.usecircular();

	return {
		print: function() {
			console.log("printed circular")
		}
	
	}
});