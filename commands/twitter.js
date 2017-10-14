const keys = require("./keys");
let Twitter = require('twitter');
let params = {screen_name: 'node_liri'};

let twitter = new Twitter(keys);


client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

module.exports = twitter;