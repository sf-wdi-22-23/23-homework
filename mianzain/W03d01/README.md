
AllIceCream/IceCream
Selectedtaste/IceCream/:id
Catagories/IceCream/:catgories




var taste = [];
app.post('/icecream', function(req, res){
	
	var newtaste;
	
	var Name = req.body.Name;
	
	var Category = req.body.Category;
	
	Newtaste = {Name: Name , Category: Category};
	
	taste.push(newtaste);
	
	response.render('icecream', { taste: taste });
});