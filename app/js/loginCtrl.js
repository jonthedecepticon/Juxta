var app = angular.module('jaxtaApp');

app.controller('loginCtrl', function($scope, EnvironmentService, $location){
	$scope.env = EnvironmentService.getEnv();//this will need to be changed

	$scope.logMeIn = function(){
		alert($scope.username);
		$location.path('https://www.strava.com/oauth/authorize');
	}
	
});