// Require the .env file with access tokens
require('dotenv').config();

// ---- OMDB ----
const omdb = require('./commands/omdb');

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
		omdb(handle_song_movie);
		break;
	default:
		help();
		break;
}