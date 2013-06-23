require(["config"], function() {
	require(["product", "add2/foo"], function(product, foo) {
		console.log("product.js is loaded", product.getName());
		foo.printProduct();
	});
});