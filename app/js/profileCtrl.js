var app = angular.module('juxtaApp');

app.controller('profileCtrl', function($scope, $routeParams, $route, $location, stravaService, profileService){

    if($routeParams.code){
            stravaService.loginWithStrava($routeParams.code)
            .then(function(data){
                var theData = data;
                console.log(data);
                $scope.athlete = theData;  
            stravaService.getActivity($scope.athlete.access_token)
            .then(function(data){
                var getList = data;
                console.log(data);
            })   
        })          
    }
});
