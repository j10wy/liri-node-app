const Spotify = require('node-spotify-api');
const colors = require("colors");
const theme = require("./colors_theme");
const propercase = require('propercase');

colors.setTheme(theme);

let spotify = new Spotify({
	id: process.env.SPOTIFY_CLIENT_ID,
	secret: process.env.SPOTIFY_CLIENT_SECRET
});

let searchSettings = {
	type: 'track',
	query: 'Ace of Base The Sign',
	limit: 3
}

async function getTracks(song_title) {
	if (song_title) {
		searchSettings.query = song_title;
	}
	var tracks = await spotify.search(searchSettings);

	return processTracks(tracks);
}

function processTracks(response) {

	var tracksResponseArray = response.tracks.items;
	var numTracks = tracksResponseArray.length;

	if (numTracks > 0) {
		tracksResponseArray.map(trackInfo => {
			var artist_name = propercase(trackInfo.artists[0].name);
			var song_title = trackInfo.name;
			var album_title = trackInfo.album.name;
			var preview_link = trackInfo.preview_url ? trackInfo.preview_url : "Preview not available".error;

			console.log(`\nArtist:`.spotify, `${artist_name}`.white);
			console.log(`Song:`.spotify, `${song_title}`.white);
			console.log(`Album:`.spotify, `${album_title}`.white);
			console.log(`URL:`, `${preview_link}`.spotify.underline);
			console.log("\n--------------------------------------\n");

		});
	} else {
		console.log("Could not find any tracks with this title.".error);
	}

}

module.exports = getTracks;