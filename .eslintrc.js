module.exports = {
	root: true,
	extends: "@react-native-community",
	rules: {
		quotes: ["error", "double"],
		"no-extra-boolean-cast": "error",
		"no-unreachable": "error",
		"dot-location": ["error", "property"],
		eqeqeq: ["error", "always"],
		"no-alert": "error",
		"no-else-return": "error",
		"no-multi-spaces": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"block-spacing": "error",
		"brace-style": ["error", "allman"],
		camelcase: "error",
		"comma-spacing": ["error", { before: false, after: true }],
		"comma-style": ["error", "last"],
		indent: ["error", "tab"],
		"no-multiple-empty-lines": "error",
		"padded-blocks": ["error", "never"],
		"arrow-spacing": "error"
	}
};
