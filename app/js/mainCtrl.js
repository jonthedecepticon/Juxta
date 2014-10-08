var app = angular.module('juxtaApp');

app.controller('mainCtrl', function($scope, $location){

	

	
	$scope.getBackground = function(){
		switch($location.path()){
		case '/Home':
		$scope.image = "app/images/14599450215_36f209a5b7_b.jpg";
		break;
		case '/Profile':
		$scope.image = "app/images/14717513054_05ccac7f9b_k.jpg";
		break;
		case '/Compare':
		$scope.image = "app/images/14670471182_4e7298f4da_o.jpg";
		break;
		}
	console.log($scope.image);
	console.log($location.path());
	return $scope.image;
	}
}); 
