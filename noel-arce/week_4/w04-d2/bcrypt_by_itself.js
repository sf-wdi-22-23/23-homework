var bcrypt = require('bcrypt'),
		user = {},
    password = 'sfwdi23',
    salt = bcrypt.genSaltSync(10);

bcrypt.genSalt(function (err, salt) {
  bcrypt.hash(password, salt, function (err, hash) {
    user.password = hash;
    console.log(user);
    return user;
  });
});