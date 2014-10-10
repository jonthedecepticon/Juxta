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
	request.post('https://www.strava.com/oauth/token?client_id=3221&client_secret=74bb40dddbffb3369fed081ad257545b6961d135&code=' + code, function (error, response, body) {
	 	if (!error && response.statusCode == 200) {
	    	return res.json(JSON.parse(body));
	 	}
	 	return {error: error};
	});
});

app.listen(8081);