var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	username : { type : String },
	password : { type : String },
	isAdmin :  { type : Boolean , default : false }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model ("UserProfile", UserSchema);
