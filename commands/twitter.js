const keys = require("./keys");

let twitter = {};
twitter.keys = keys;

twitter.math = function(a,b) {
	return a * b;
}

module.exports = twitter;