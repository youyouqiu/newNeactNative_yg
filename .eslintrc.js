module.exports = {
  root: true,
  extends: '@react-native-community',
  globals: {
		"fetch": false,
		"Headers": false,
		"storage": false,
		"store": false,
		"FormData": false
	},
	rules: {
		'no-var': 'error',
		"semi": 0,
		"dot-notation": 0,
		"prettier/prettier": 0,
		"indent": ["error", 2],
		"no-undef": 2,
		"no-unused-vars": 'error',
		"no-console": ["warn", { "allow": ["error"]}],
		"max-len": ["error", { "code": 200 }]
	}
};
