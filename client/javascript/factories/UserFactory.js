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
myApp.factory('UserFactory', function ($http) {
	var factory = {};
	var user = {};

	factory.loginUser = function () {
		var temp_user = '';

		while(temp_user == '') {
			temp_user = prompt("Please enter your name");
		}

		//check database if user exists move along
		//otherwise add user to database
		$http.post('/user', temp_user).success(function (output) {
			//user added
		});

		user = {name: temp_user};
	};

	factory.getCurrentUser = function (callback) {
		callback(user);
	};

	return factory;
});