var app = angular.module('juxtaApp');

app.controller('loginCtrl', function($scope, $firebase, mainService){ //pluggin stravaService

	var FirebaseTokenGenerator = require("firebase-token-generator");
  	var tokenGenerator = new FirebaseTokenGenerator("0NHCoERpOHndC2vYlBWmEyOVhhHoQMa4kSyoeeWz");
  	var token = tokenGenerator.createToken({uid: "1", some: "arbitrary", data: "here"});

	var ref = new Firebase("https://juxtapostion.firebaseio.com/");
	ref.authWithCustomToken(AUTH_TOKEN, function(error, authData) {
		if (error) {
			console.log("Login Failed!", error);
		} else {
			console.log("Login Succeeded!", authData);
		}
		ref.unauth();

	});

	var getData = function(profile){
		stravaService.loginWithStrava().then(function(data){
			var mainData = data.data.results;
		});
	}



});

