var vino = require('../vino.js'), client;

if (process.argv.length != 5) {
	console.error('usage: node homefeed.js [username] [password] [tag-to-search]');
	process.exit(1);
}

if (!(process.argv[4].match(/^#/))) {
	console.error('tag to search for must begin with #');
	process.exit(1);
}

client = new vino({username: process.argv[2], password: process.argv[3]});
client.login(function(err, key, username) {
	
	if (err) throw new Error(err);
	console.log('successfully logged in, key and username: ', key, username);

	client.tagSearch(
		process.argv[4], function(err, feed) {
			if (err) throw new Error(err);
			// console.log('your timeline', feed);
			for (var i in feed.records) {
				var entry = feed.records[i];
				console.log(entry.description, entry.videoUrl);
			}
		});

});
