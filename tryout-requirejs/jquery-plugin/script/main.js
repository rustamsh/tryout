require(["config"], function() {
	require(["add2/foo"], function(foo) {
		foo.print();
	});
});