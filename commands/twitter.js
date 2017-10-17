const Twitter = require('twitter');

let twitter = new Twitter({
	consumer_key: process.env.DB_CONSUMER_KEY,
	consumer_secret: process.env.DB_CONSUMER_SECRET,
	access_token_key: process.env.DB_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.DB_ACCESS_TOKEN_SECRET
});

let params = {
	screen_name: 'barackobama',
	count: 1
};

async function getTweet(screenName) {
	if (screenName) {
		console.log("Screen Name:",screenName);
		params.screen_name = screenName;
	}
	var tweets = await twitter.get('statuses/user_timeline', params);
	return processTweets(tweets);
}

function processTweets(tweets) {
	tweets.map(tweet => {
		console.log("-------------------");
		console.log(tweet);
		console.log("-------------------");
	});

}

module.exports = getTweet;