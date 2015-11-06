//REQUIRES
var express = require ('express'),
    app = express(),
    bodyParser = require ('body-parser'),
    path = require("path"),
    db = require ('./models/index.js');
    // posts = [{body: 'Space Jammers are the best!', _id:'1'},
    // 				 {body: 'Fall is the best season!', _id: '2'},
    // 				 {body: 'Random Fact: Banging your head against a wall burns 150 calories an hour.', _id: '3'}];

//CONFIG//
//set ejs as view enging
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

//ROUTES
//route to show an index page view
app.get('/', function (req, res) {
	db.Post.find({}, function(err, posts) {
		if(err) console.log(err);
		res.render('index', {posts: posts});
	});
});

app.get('/posts', function (req, res) {
	db.Post.find({}, function(err, posts) {
		if(err) console.log(err);
		res.render('index', {posts: posts});
	});
});

//route to show single blog post

//route to create new blog post
app.post('/posts', function(req, res) {
	console.log(req.body);
	db.Post.create(req.body, function(err, post) {
		console.log("post request went through");
		if (err) { 
			console.log(err); 
		}
		res.json(post);
	});
});

//route to delete single blog post
app.delete('/posts/:_id', function(req, res) {
	console.log('post id is ', req.params._id);
	db.Post.find({
		_id: req.params._id
	}).remove(function(err, post) {
		console.log("post deleted");
		res.json("The post is gone");
	});
	db.Post.find({
		_id: req.params._id
	});
});

//route to update a single post - PUT

app.listen(3000, function(){
	console.log('Go to port 3000');
});