var app = angular.module('juxtaApp', ['firebase', 'ngRoute']);

//app.run will go here.

// app.config(function($routeProvider){
	

// 	$routeProvider.when('/login',{
// 		templateUrl: '/index.html',
// 		controller: 'loginCtrl'
// 	}).when('/threads/:threadId',{ //changed from .when('/threads'
// 		templateUrl:'app/js/threads/threads.html',
// 		controller: 'ThreadsCtrl',
// 		resolve: {
// 			threadsRef: function(ThreadService){
// 				return ThreadService.getThreads();
// 			}
// 		}
// 	}).when('/thread/:threadId',{
// 		templateUrl:'app/js/threads/thread.html',
// 		controller: 'threadCtrl',
// 		resolve: {
// 			threadRef: function(ThreadService, $stateParams){
// 				return ThreadService.getThread($stateParams.threadId);
// 			},
// 			commentRef: function(ThreadService, $stateParams){
// 				return ThreadService.getComments($stateParams.threadId);
// 			}
// 		}
// 	 }).otherwise({
// 		redirectTo: '/login'
// 	})
	

// });
