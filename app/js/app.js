var app = angular.module('juxtaApp', ['ngRoute']);

//app.run will go here.

app.config(function($routeProvider){
	// $httpProvider.interceptors.push('httpRequestInterceptor');

	$routeProvider.when('/Home', {
		templateUrl: 'loginCred.html',
		controller: 'loginCtrl',
		resolve: {
			getBackground: function(mainCtrl){
				debugger;
			return mainCtrl.getBackground();
			}
		}
	}).when('/Profile',{ 
		templateUrl:'profileSegTemp.html'
		// controller: ''
	}).when('/Compare',{
		templateUrl:'compareTemp.html'
		// controller: ''
	 }).otherwise({
		redirectTo: '/Home'
	})
	

});
