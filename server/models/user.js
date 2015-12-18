var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	userName: String,//{type: String, unique: true, required: true},
	createdAt: {type: String, default: Date()}
});

mongoose.model('User', UserSchema);