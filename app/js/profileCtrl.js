var app = angular.module('juxtaApp');

app.controller('profileCtrl', function($rootScope, $routeParams, $route, $location, stravaService){

    if($routeParams.code){
            stravaService.loginWithStrava($routeParams.code)
            .then(function(data){
                console.log(data);
            })
        }
        

    // var getData = function(profile){
    //  stravaService.loginWithStrava().then(function(data){
    //      var mainData = data.data.results;
    //  }); 
    //  console.log(getData);
    // }
});
