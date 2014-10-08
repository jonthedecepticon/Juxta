var app = angular.module('juxtaApp');

app.controller('mainCtrl', function($scope, $location){ //pluggin stravaService

		$scope.getRoute = function(){
			return	$location.path(); 
		}

		$scope.$watch($scope.getRoute, function(){
			if($scope.getRoute() === '/Home'){
				$scope.image = "app/images/14599450215_36f209a5b7_b.jpg";
			} else if($scope.getRoute() === '/Profile'){
				$scope.image = "app/images/14717513054_05ccac7f9b_k.jpg";
			} else {
				$scope.image = "app/images/14670471182_4e7298f4da_o.jpg";
			};
		});

			
}); 
