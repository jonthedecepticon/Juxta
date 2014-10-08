 var app = angular.module('juxtaApp');

 app.service('mainService', function($scope, $firebase, $http, $q){

  this.loginWithStrava = function(profile){
       var deferred = $q.defer();
        $http({
      method: 'GET',
      url: 'https://www.strava.com/oauth/authorize?client_id=3221' 
    }).then(function(data){
      var mainData = data.data.results;
      deferred.resolve(mainData);
     })
     return deferred.promise;
    }
});

  