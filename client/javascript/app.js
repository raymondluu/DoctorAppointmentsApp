// myDiscussionApp.config(function ($routeProvider) {
// 	$routeProvider
// 	.when('/', {
// 		templateUrl: 'partials/login.html',
// 		controller: 'LoginController'
// 	})
// 	.when('/dashboard', {
// 		templateUrl: 'partials/dashboard.html',
// 		controller: 'DashboardController'
// 	})
// 	.when('/topic/:index', {
// 		templateUrl: 'partials/topic.html',
// 		controller: 'TopicController'
// 	})
// 	.otherwise({
// 		redirectTo: '/'
// 	});
// });
var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);

myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/dashboard.html',
		controller: 'DashboardController'
	})
	.when('/new_appointment', {
		templateUrl: 'partials/appointment.html',
		controller: 'AppointmentController'
	})
	.otherwise({
		redirectTo: '/'
	})
});