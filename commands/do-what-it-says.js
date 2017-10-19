const fs = require('fs');
const colors = require("colors");
const theme = require("./colors_theme");
colors.setTheme(theme);

const commands = {
	help: require('./help'),
	movie: require('./omdb'),
	spotify: require('./spotify'),
	tweets: require('./twitter'),
}

function doWhatItSays() {
	fs.readFile('./commands/random.txt', (error, data) => {
		if (error) {
			throw error
		};

		var randomTxt = data.toString().split(',');
		var command = randomTxt[0];
		var handle_song_movie = randomTxt[1];

		commands[command](handle_song_movie);

	});
}

module.exports = doWhatItSays;