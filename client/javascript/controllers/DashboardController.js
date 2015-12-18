myApp.controller('DashboardController', function ($scope, UserFactory, AppointmentFactory) {
	$scope.user = {}; //not needed
	$scope.appointments = [];

	UserFactory.getCurrentUser(function (factory_data) {//not needed
		$scope.user = factory_data;
	});

	AppointmentFactory.getAppointments(function (factory_data) {
		$scope.appointments = factory_data;
		$scope.formattedAppointments = [];

		//format appointments for display to users
		for (idx in $scope.appointments) {
			var appointmentToFormat = $scope.appointments[idx]; 

			var formatDate = appointmentToFormat.date;
			var formatTime = appointmentToFormat.time;
			var formatDate2 = '';
			var formatTime2 = '';

			var amOrPm = '';
			var theHour = '';
			var theMinute = '';

			if (formatTime.getHours() < 12 && formatTime.getHours() > 0) {
				amOrPm = 'AM';
				theHour = formatTime.getHours();
			}
			else if (formatTime.getHours() == 0) {
				amOrPm = 'AM';
				theHour = hour[formatTime.getHours()];
			}
			else {
				amOrPm = 'PM';
				theHour = hour[formatTime.getHours()];
			}

			if(formatTime.getMinutes() < 10) {
				theMinute = '0' + formatTime.getMinutes();
			}
			else {
				theMinute = formatTime.getMinutes();
			}

			formatDate2 = month[formatDate.getMonth()] + ' ' + formatDate.getDate() + ' ' + formatDate.getFullYear();
			formatTime2 = theHour + ':' + theMinute + ' ' + amOrPm;

			$scope.formattedAppointments[idx] = {};
			$scope.formattedAppointments[idx].date = formatDate2;
			$scope.formattedAppointments[idx].time = formatTime2;
			$scope.formattedAppointments[idx].user = $scope.appointments[idx].user;
			$scope.formattedAppointments[idx].complaint = $scope.appointments[idx].complaint;
		}
		
	});
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