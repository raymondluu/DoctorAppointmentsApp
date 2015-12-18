var month = new Array();
var hour = new Array();

month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
hour[0] = 12;
hour[13] = 1;
hour[14] = 2;
hour[15] = 3;
hour[16] = 4;
hour[17] = 5;
hour[18] = 6;
hour[19] = 7;
hour[20] = 8;
hour[21] = 9;
hour[22] = 10;
hour[23] = 11;

// app1955.factory('Factory1955', function ($http) {
// 	var factory = {};
// 	var people = [];

// 	factory.getPeople = function (callback) {
// 		$http.get('/people').success(function (output) {
// 			people = output;
// 			callback(people);
// 		});
// 	};

// 	factory.addPerson = function (info, callback) {
// 		$http.get('/new/' + info.name + '/').success(function (output) {
// 			callback(people);
// 		});
// 	};

// 	factory.removePerson = function (person, callback) {
// 		$http.get('/remove/' + person.name + '/').success(function (output) {
// 			callback(people);
// 		});
// 	};

// 	return factory;
// });
myApp.factory('AppointmentFactory', function ($http, $location) {
	var factory = {};
	var appointments = [];
	// var user = {};

	// factory.loginUser = function () {
	// 	var temp_user = 'George';

	// 	// while(temp_user == '') {
	// 	// 	temp_user = prompt("Please enter your name");
	// 	// }

	// 	//check database if user exists move along
	// 	//otherwise add user to database

	// 	user = {name: temp_user};
	// };

	// factory.getCurrentUser = function (callback) {
	// 	callback(user);
	// };

	factory.addAppointment = function (appointment, callback) {
		appointments.push(appointment); //later update to add to db

		
		//get rid of appointments before today
		// for (idx in appointments) {
		// 	if (appointments[idx].date.getTime() < Date.now()) {
		// 		appointments.splice(idx, 1);
		// 	}
		// }




		// var unSortedAppointments = appointments;
		// var sortedAppointments = [];







		// while(unSortedAppointments.length > 0) {
		// 	var indexOfLeastDate = -1;

		// 	for (idx in unSortedAppointments) {
		// 		if (unSortedAppointments[idx].getTime() <) {
		// 			indexOfLeastDate = idx;
		// 		}
		// 	}
		// }

		// formatDates(appointment);

		callback();

		$location.path('/');	
	}

	factory.getAppointments = function (callback) {
		callback(appointments);  //later pull appointments from db
	}

	return factory;
});
