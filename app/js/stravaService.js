 var app = angular.module('juxtaApp');

 app.service('stravaService', function($http){

  this.loginWithStrava = function(code){
    return $http({
      method: 'POST',
      url: 'http://localhost:8081/get_auth_token?code=' + code
    })
  }
});

  