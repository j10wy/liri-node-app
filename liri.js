require('dotenv').config();
let twitter = require("./commands/twitter");

let params = {screen_name: 'jeffreylowy'};

twitter.get('statuses/user_timeline', params, function(error, tweets, response) {

	  console.log(tweets);

  });

//console.log(twitter);