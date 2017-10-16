const Twitter = require('twitter');

let twitter = new Twitter({
	consumer_key: process.env.DB_CONSUMER_KEY,
	consumer_secret: process.env.DB_CONSUMER_SECRET,
	access_token_key: process.env.DB_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.DB_ACCESS_TOKEN_SECRET
});

module.exports = twitter;