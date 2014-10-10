var app = angular.module('juxtaApp');

app.controller('profileCtrl', function($scope, $routeParams, $route, $location, stravaService){

    if($routeParams.code){
            stravaService.loginWithStrava($routeParams.code)
            .then(function(data){
                var theData = data;
                $scope.athlete = theData
                console.log($scope.athlete)

            })

        }

    // var getData = function(profile){
    //  stravaService.loginWithStrava().then(function(data){
    //      var mainData = data.data.results;
    //  }); 
    //  console.log(getData);
    // }
});
