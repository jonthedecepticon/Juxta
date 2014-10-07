var app = angular.module('juxtaApp',['ngRoute', 'firebase']);

app.config(function($routeProvider){

  $routeProvider
  .when('/', {
  	templateUrl: 'Juxta/index.html#',
    controller: 'loginCtrl'
  }).when('/Juxta/loggedIn.html#', {
  	templateUrl: 'threads/threadsView.html',
    controller: ''
  }).when('Juxta/compare.html#',{
    templateUrl: 'Juxta/compare.html#',
    controller: ''
  }).otherwise
        
      });