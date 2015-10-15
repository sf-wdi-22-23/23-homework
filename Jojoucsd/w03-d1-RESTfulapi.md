pseudo-code rotues:

Get all icecreams "/icecreams"
Get iceream by ID "/icecreams/:id"
Get all flavors "/flavors"
Get flavor by ID "/flavors/:id"
Get all icecreams by flavor "/flavors/:id/icecreams"
Get one flavor of one icecream "/flavors/:id/icecreams/:id"

app.post('/flavors/:iD/icecreams/:Id', function (req, res){
	var flavorID = req.params.iD;
	var iceID = req.params.Id;
	res.send("The flavor is" + flavorID + "And the Icecream is" + iceID);
})