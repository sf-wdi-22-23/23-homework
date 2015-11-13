var bcrypt = require('bcrypt');

var user = {};

var password = "spacecadet01";

bcrypt.genSalt(10, function(err,salt){
	bcrypt.hash(password, salt, function(err, hash) {
		user.password = hash;
		console.log(user);
		return user;
	});
});