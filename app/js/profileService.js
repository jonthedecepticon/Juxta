var app = angular.module('juxtaApp');

app.service('profileService', function($http, $q){

	this.getData = function(){
		return $http({
			method: 'GET',
			url: 'https://www.strava.com/api/v3/athlete'
		}).then function(athlete){
			return data.athlete.results; //might not need the .results
		})
	}
})