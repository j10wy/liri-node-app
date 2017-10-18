// Require the .env file with access tokens
require('dotenv').config();

// ---- TWITTER ----
const twitter = require('./commands/twitter');

// ---- SPOTIFY ----
const spotify = require('./commands/spotify');

// ---- HELP INFO ----
const help = require('./commands/help');

// ---- COMMANDS/OPTIONS ----

let command = process.argv[2];
let handle_song_movie = process.argv[3];

switch (command) {
	case ('my-tweets'):
		twitter(handle_song_movie);
		break;
	case ('spotify-this-song'):
		spotify(handle_song_movie);
		break;
	case ('movie-this'):
		// omdb();
		break;
	default:
		help();
		break;
}