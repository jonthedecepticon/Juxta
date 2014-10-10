var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	next();
});

app.post('/get_auth_token', function(req, res) {
	var request = require('request');
	var code = req.param('code');
	request.post('https://www.strava.com/oauth/token?client_id=3221&client_secret=b139c47e8f8e2d8865708a9eb2e8e0dbbb2c02ff&code=' + code, function (error, response, body) {
	 	if (!error && response.statusCode == 200) {
	    	return res.json(JSON.parse(body));
	 	}
	 	return {error: error};
	});
});

app.listen(8081);