let colors = require('colors');

colors.setTheme({
	error: ['red', 'bold', 'underline',],
	tweets: ['cyan', 'bold'],
	data: 'grey'
});

function warning() {
	console.log("\nENTER A VALID COMMAND\n".error);
	console.log("my-tweets".tweets);
	console.log("usage: my-tweets " + "<handle> [--#]\n".data);
	console.log("<handle> - Pull tweets from a different user. Default is @barackobama. (optional)".white);
	console.log("[--#] - Set number of tweets. Default is 20. (optional)".white);
	console.log("----------------------------------------------------------------------------------".white);
}

module.exports = warning;