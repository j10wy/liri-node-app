// Require the .env file with access tokens
require('dotenv').config();

// ---- TWITTER ----
let twitter = require('./commands/twitter');

// ---- COMMANDS/OPTIONS ----
let warning = require('./commands/warning');
let command = process.argv[2];
let handle_song_movie = process.argv[3];

switch (command) {
	case ('my-tweets'):
		twitter(handle_song_movie);
		break;
	case ('movie-this'):
		// omdb();
		break;
	default:
		warning();
		break;
}