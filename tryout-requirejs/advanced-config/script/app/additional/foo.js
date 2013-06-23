define(["product"], function(product) {
	return {
		printProduct: function() {
			console.log("printed from foo", product.getName());
		}
	}
});