var mongoose = require('mongoose'),
	express = require('express'),
	bodyparser = require('body-parser'),
	app = express();

app.set('view engine', 'ejs'); 
//use the images and assets in the public folder
app.use(express.static('public'));

// MIDDLEWARE



// ROUTES
app.get('/', function (req, res) {
	// res.send("2:59 -- One to three.");
	res.render('index');
});




app.listen(3000, function () {
	console.log("UP AND RUNNING");
});
