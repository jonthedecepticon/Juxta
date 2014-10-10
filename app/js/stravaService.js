 var app = angular.module('juxtaApp');

 app.service('stravaService', function($http, $q){

  this.loginWithStrava = function(code){
     return $http({
      method: 'POST',
      url: 'http://localhost:8081/get_auth_token?code=' + code
    }).then(function(data) {
    	//store data.data.access_token
      return data.data;
    })
  }

  this.getActivity = function(token){
  	return $http({
  		method: 'JSONP',
  		url: 'https://www.strava.com/api/v3/athlete/activities/?access_token='+token+'&callback=JSON_CALLBACK'
  	}).then (function(data){
  		return data;
  	})
  }

});

  