require(["app/utils", "app/func", "lib/math", "app/circular", "app/circular2"], function(utils, func, math, circular, circular2) {
	console.log("utils has been loaded");
	
	console.log(utils);
	console.log(utils.calculateDays());

	console.log(func);
	func();

	circular2.usecircular();
	circular.print();
	//throws an exception, cuz calculateDays not defined
	//console.log(calculateDays());
});