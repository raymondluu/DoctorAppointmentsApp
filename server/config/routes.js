var users = require('../controllers/users.js');

module.exports = function (app) {
	// app.get('/people', function (req, res) {
	// 	//will serve up the full collection of people born in 1955
	// 	api1955.show(req, res);
	// });

	// app.get('/new/:name/', function (req, res) {
	// 	//will add a name into the database. can be used for blank spaces, so adding Steve Jobs to our database, you'd type in the URL 'localhost:8888/new/Steve Jobs'
	// 	api1955.save(req, res);
	// });

	// app.get('/remove/:name/', function (req, res) {
	// 	//will delete a name from the database.
	// 	api1955.remove(req, res);
	// });

	// app.get('/:name', function (req, res) {
	// 	//will bring up the document of that particular person.
	// 	api1955.showOne(req, res);
	// });
	app.post('/user', function (req, res) {
		users.addUser(req, res);
	});
};