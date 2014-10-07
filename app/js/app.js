var app = angular.module('juxtaApp', ['ngRoute']);

//app.run will go here.

app.config(function($routeProvider ){
	// $httpProvider.interceptors.push('httpRequestInterceptor');

	$routeProvider.when('/', {
		templateUrl: 'loginCred.html',
		controller: 'loginCtrl'
	}).when('/Profile',{ 
		templateUrl:'profileSegTemp.html'
		// controller: ''
	}).when('/Compare',{
		templateUrl:'compareTemp.html'
		// controller: ''
	 }).otherwise({
		redirectTo: '/'
	})
	

});
