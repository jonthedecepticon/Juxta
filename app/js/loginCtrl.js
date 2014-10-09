var app = angular.module('juxtaApp');

app.controller('loginCtrl', function($rootScope, $scope, $routeParams, $route, $location, stravaService){ //pluggin stravaService

		// console.log($routeParams);
		// if($routeParams.code){
		// 	stravaService.loginWithStrava($routeParams.code)
		// 	.then(function(data){
  //     			console.log(data);
		// 	})
		// }

	// var getData = function(profile){
	// 	stravaService.loginWithStrava().then(function(data){
	// 		var mainData = data.data.results;
	// 	}); 
	// 	console.log(getData);
	// }



});

