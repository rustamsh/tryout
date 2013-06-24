define(["lib/jquery", "lib/jquery.dummy"], function($) {
	return {
		callPlugin: function() {
			$().dummy();
		}
	}
});