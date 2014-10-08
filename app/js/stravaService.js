 var app = angular.module('juxtaApp');

 app.service('mainService', function($scope, $firebase, $http, $q){

  this.loginWithStrava = function(profile){
       var deferred = $q.defer();
        $http({
      method: 'JSONP',
      url: 'https://www.strava.com/oauth/authorize' + profile + '&callback=JSON_CALLBACK'
    }).then(function(data){
      var mainData = data.data.results;
      deferred.resolve(mainData);
     })
     return deferred.promise;
    }
});

  