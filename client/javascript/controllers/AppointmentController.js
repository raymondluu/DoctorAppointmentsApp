myApp.controller('AppointmentController', function ($scope, UserFactory, AppointmentFactory) {
	$scope.appointment = {};
	$scope.appointment.user = {};

	UserFactory.getCurrentUser(function (factory_data) {
		$scope.appointment.user = factory_data;
	});

	$scope.addAppointment = function () {
		AppointmentFactory.addAppointment($scope.appointment, function () {
			$scope.appointment = {};
		});
	}
});

// app1955.controller('Controller1955', function ($scope, Factory1955) {
// 	Factory1955.getPeople(function (data) {
// 		$scope.people = data;
// 	});

// 	$scope.addPerson = function () {
// 		Factory1955.addPerson($scope.newPerson, function () {
// 			Factory1955.getPeople( function (data) {
// 				$scope.people = data;
// 			});

// 			$scope.newPerson = {};
// 		});
// 	};

// 	$scope.removePerson = function (person) {
// 		Factory1955.removePerson(person, function () {
// 			Factory1955.getPeople( function (data) {
// 				$scope.people = data;
// 			});
// 		});
// 	};
// });