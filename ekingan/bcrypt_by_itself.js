var bcrypt = require('bcrypt'),
		user,
		password = hippo,
		salt = bcrypt.genSaltSync(10);
//has password
bcrypt.genSalt(function (err, salt){
	bcrypt.hash(password, salt, function (err, hash){
		console.log(hash);
		//creat new user with hashed password
		user.create({
			email: email,
			passwordDigest: hash
		}, callback);
		console.log(user);
	});
});