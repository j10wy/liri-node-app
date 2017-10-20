#! /usr/bin/env node

require("./env_check");

// Require the .env file with access tokens
require('dotenv').config();

// Require the modules for each command
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
// ---- COMMANDS/LOGGER/OPTIONS ----
const {log_command} = require('./commands/logger');
let command = process.argv[2];
let handle_song_movie = process.argv[3] === "--say" ? undefined : process.argv[3];
let options = {
	say: false
};

// Execute the IIFE below to check if the --say is passed with the 'movie' command and the fourth index of the process.argv array
(function (arguments) {
	arguments.find((item, index) => {
		if (index === 4 && command === 'movie' && item === '--say') {
			options.say = true;
		}
	});
}(process.argv));

// Call the log_command function to write the command to ./history.log
log_command(process.argv);

// Switch statement execute the function associated with the command/argument sent from the command line.
switch (command) {
	case ('tweets'):
		// Each function is passed the options array, even if it is empty
		twitter(handle_song_movie, options);
		break;
	case ('spotify'):
		spotify(handle_song_movie, options);
		break;
	case ('movie'):
		omdb(handle_song_movie, options);
		break;
	case ('do-what-it-says'):
		doWhatItSays(handle_song_movie, options);
		break;
	default:
		// If no command/argument is passed, display list of commands with their usage
		help();
		break;
}