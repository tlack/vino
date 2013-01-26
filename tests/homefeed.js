var vino = require('../vino.js'), client;

if (process.argv.length != 4) {
	console.error('usage: node homefeed.js [username] [password]');
	process.exit(1);
}

	
client = new vino({username: process.argv[2], password: process.argv[3]});
client.login(function(err, key, username) {
	
	if (err) throw new Error(err);
	console.log('successfully logged in, key and username: ', key, username);

	client.homeFeed(function(err, feed) {
		if (err) throw new Error(err);
		// console.log('your timeline', feed);
		for (var i in feed.records) {
			var entry = feed.records[i];
			console.log(entry.description, entry.videoUrl);
		}
	});

});
