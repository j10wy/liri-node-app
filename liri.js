// Require the .env file with access tokens
require('dotenv').config();
// ---- OMDB ----
const omdb = require('./commands/omdb');
// ---- TWITTER ----
const twitter = require('./commands/twitter');
// ---- SPOTIFY ----
const spotify = require('./commands/spotify');
// ---- DO WHAT IS SAYS ----
const doWhatItSays = require('./commands/do-what-it-says');
// ---- HELP INFO ----
const help = require('./commands/help');
// ---- COMMANDS/OPTIONS ----

let command = process.argv[2];
let handle_song_movie = process.argv[3];

switch (command) {
	case ('tweets'):
		twitter(handle_song_movie);
		break;
	case ('spotify'):
		spotify(handle_song_movie);
		break;
	case ('movie'):
		omdb(handle_song_movie);
		break;
	case ('do-what-it-says'):
		doWhatItSays(handle_song_movie);
		break;
	default:
		help();
		break;
}