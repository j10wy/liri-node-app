const Twitter = require('twitter');
const colors = require('colors');
const moment = require("moment");
const theme = require("./colors_theme");
const {log_data} = require('./logger');

colors.setTheme(theme);

let twitter = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

let params = {
	screen_name: 'barackobama',
	count: 5
};

async function getTweet(screenName) {
	if (screenName) {
		params.screen_name = screenName;
	}
	var tweets = await twitter.get('statuses/user_timeline', params);
	return processTweets(tweets);
}

function processTweets(tweets) {
	tweets.map(tweet => {
		// Store tweet info in variables
		var screen_name = tweet.user.screen_name;
		var tweet_text = tweet.text;
		var tweet_time = moment(new Date(tweet.created_at), 'YYYY-MM-DD hh:mm:ss');

		// Log tweet to the console
		console.log(`\n@${screen_name}:`.tweets, `${tweet_text}`.white);
		console.log(`Created: ${tweet_time}`.data);
		console.log("\n-------------------\n");

		log_data(`\n@${screen_name}: ${tweet_text}\nCreated: ${tweet_time}\n\n-------------------\n`);
	});

}

module.exports = getTweet;