var app = angular.module('juxtaApp', ['ngRoute']);

//app.run will go here.

app.config(function($httpProvider, $routeProvider, $locationProvider){
	// $httpProvider.interceptors.push('httpRequestInterceptor');

	$routeProvider.when('/Home', {
		templateUrl: 'loginCred.html',
		controller: 'loginCtrl'
	}).when('/Profile',{ 
		templateUrl:'profileSegTemp.html',
		controller: 'profileCtrl'
	}).when('/Compare',{
		templateUrl:'compareTemp.html'
		// controller: ''
	 }).otherwise({
		redirectTo: '/Home'
	})
	

});
