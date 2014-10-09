var app = angular.module('juxtaApp');

app.controller('mainCtrl', function($scope, $location){ //pluggin stravaService also need to add $route, $routeParams.

		$scope.getRoute = function(){
			return	$location.path(); 
		}
		$scope.$watch($scope.getRoute, function(){
			if($scope.getRoute() === '/Home'){
				$scope.image = "app/images/cav.jpg";
			} else if($scope.getRoute() === '/Profile'){
				$scope.image = "app/images/14719463863_9dcb6af20f_k.jpg";
			} else {
				$scope.image = "app/images/14670471182_4e7298f4da_o.jpg";
			};
		});

			
}); 
