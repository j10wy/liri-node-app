require('dotenv').config();
const os = require('os');
const spawn = require("child_process").spawn;
const request = require('request');
const colors = require('colors');
const theme = require("./colors_theme");
const {log_data} = require('./logger');

colors.setTheme(theme);
let omdb = {
	base: `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}`,
	type: 'movie',
	t: 'Mr. Nobody'
}

function omdbRequest(movie_title, options = {
	say: false
}) {
	if (movie_title) {
		omdb.t = movie_title;
	}

	omdb.url = encodeURI(`${omdb.base}&type=${omdb.type}&t=${omdb.t}`);

	request(omdb.url, function (error, response, body) {
		var body = JSON.parse(body);
		var os_platform = os.platform();
		var rule = "\n\n--------------------------------------\n";
		if (body.Response != 'False') {
			omdb.movie_title = body.Title;
			omdb.movie_year = body.Year;
			omdb.movie_ratings = body.Ratings;
			omdb.movie_country = body.Country;
			omdb.movie_language = body.Language;
			omdb.movie_director = body.Director;
			omdb.movie_actors = body.Actors;
			omdb.movie_plot = body.Plot;
			omdb.movie_ratings_obj = {};

			buildRatingsObj(omdb.movie_ratings);

			console.log(`\nTitle:`.omdb, `${omdb.movie_title}`.white);
			console.log(`Year:`.omdb, `${omdb.movie_year}`.white);
			console.log(`IMDB Rating:`.omdb, `${omdb.movie_ratings_obj.imdb}`.white);
			console.log(`Rotten Tomatoes Rating:`.omdb, `${omdb.movie_ratings_obj.rotten_tomatoes}`.white);
			console.log(`Country:`.omdb, `${omdb.movie_country}`.white);
			console.log(`Language:`.omdb, `${omdb.movie_language}`.white);
			console.log(`Director:`.omdb, `${omdb.movie_director}`.white);
			console.log(`Actors:`.omdb, `${omdb.movie_actors}`.white);
			console.log(`Plot:`.omdb, `${omdb.movie_plot}`.white);
			console.log(rule);

			log_data(`\nTitle: ${omdb.movie_title}\nYear: ${omdb.movie_year}\nIMDB Rating: ${omdb.movie_ratings_obj.imdb} Rotten Tomatoes Rating: ${omdb.movie_ratings_obj.rotten_tomatoes}\nCountry: ${omdb.movie_country}\nLanguage: ${omdb.movie_language}\nDirector: ${omdb.movie_director}\nActors: ${omdb.movie_actors}\n\nPlot: ${omdb.movie_plot}${rule}`);

			if (options.say && os_platform === 'darwin') {
				say(options, `${omdb.movie_title}. ${omdb.movie_year}. ${omdb.movie_plot}`);
			}

		} else {
			console.log("Error:".error, "Movie not found!".white);
			log_data(`\nError: Movie not found!${rule}`);
		}

	});
}

function buildRatingsObj(ratingsArray) {
	ratingsArray.map(item => {
		switch (item.Source) {
			case ('Internet Movie Database'):
				omdb.movie_ratings_obj.imdb = item.Value
				break;
			case ('Rotten Tomatoes'):
				omdb.movie_ratings_obj.rotten_tomatoes = item.Value
				break;
			case ('Metacritic'):
				omdb.movie_ratings_obj.metacritic = item.Value
				break;
		}
	});
}

function say(options, text) {
	var os_platform = os.platform();
	if (options.say && os_platform === 'darwin') {
		spawn('say', [text]);
	}
}

module.exports = omdbRequest;