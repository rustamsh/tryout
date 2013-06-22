define(["app/utils", "lib/math"], function(utils, math) {
	return function() {
		console.log("logged from func.js, test add ", math.add(utils.calculateDays(), 99));
		console.log("logged from func.js ", utils.calculateDays());
	}
});