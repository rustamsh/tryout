require(["app/utils"], function(utils) {
	console.log("utils has been loaded");
	
	console.log(utils);
	console.log(utils.calculateDays());

	//throws an exception, cuz calculateDays not defined
	console.log(calculateDays());
	

});

//it will throw an exception, because utils.js is not available at this scope
var days = calculateDays();