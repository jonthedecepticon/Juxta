var app = angular.module('juxtaApp');

app.controller('loginCtrl', function($scope, $firebase){
	// $scope.env = EnvironmentService.getEnv();//this will need to be changed

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
});