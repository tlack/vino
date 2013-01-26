Vino
====

Vino is a Vine.co API client written in JavaScript. It is targeted toward
Node.js, but should be usable via the browser, CORS issues notwithstanding.

Features
--------

- Can log in to your account (but not via Twitter; you need to have set an
	actual email and password)
- Can fetch your home feed
- That's about it. 

Example usage
-------------

```javascript
client = new vino({username: 'barf@example.com', password: 'noodles2000'});
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
```

In the pipeline
---------------

- Research workaround for Twitter OAuth
- Get other users feeds
- Improve request() boilerplate disaster

License
-------

MIT

Disclaimer
----------

I am not employed by Vine.co, nor have they blessed this project. 

Warranty
--------

Absolutely none
