var app = angular.module('juxtaApp');

app.controller('loginCtrl', function($scope,  $location, mainService){
	// $scope.env = EnvironmentService.getEnv();//this will need to be changed

	$scope.logMeIn = function(){
		alert($scope.username);
		$location.path('https://www.strava.com/oauth/authorize');
	}
	$scope.getData = function() {
		mainService.getData().then(function(data) {
			$scope.data = data;
		});
	}

	console.log($scope.data);
});