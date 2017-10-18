const colors = require('colors');
const theme = require("./colors_theme");

colors.setTheme(theme);

function help() {
	// Help title
	console.log("\nENTER VALID COMMAND\n".help_title);
	// Twitter 
	console.log("my-tweets".tweets);
	console.log("usage: my-tweets " + "<handle> [--#]\n".data);
	console.log("<handle>".white + " - Pull tweets from a different user. Default is @barackobama.".data);
	console.log("[--#]".white + " - Set number of tweets. Default is 20. (optional)".data);
	console.log("----------------------------------------------------------------------------------\n".white);
	// Spotify
	console.log("spotify-this-song".spotify);
	console.log("usage: spotify-this-song " + "<song title>\n".data);
	console.log("<song title>".white + " - Song to search in Spotify. Default is 'I Want it That Way.'".data);
	console.log("----------------------------------------------------------------------------------\n".white);
	// OMDB
	console.log("movie-this".omdb);
	console.log("usage: movie-this " + "<movie title>\n".data);
	console.log("<movie title>".white + " - Song to movie in OMDB DB. Default is 'Mr. Nobody.'".data);
	console.log("----------------------------------------------------------------------------------\n".white);
}

module.exports = help;