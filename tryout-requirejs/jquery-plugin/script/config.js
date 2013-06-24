require.config({
	baseUrl: "script/app",
	paths: {
		"add2": "additional",
		"lib": "../../../lib"
	},
	shim: {
		"lib/jquery": {
			exports: "jQuery"
		},
		"lib/jquery.dummy": ["lib/jquery"]
	}
});