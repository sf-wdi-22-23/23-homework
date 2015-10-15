Objective: Making Mongoose Models using schema

var bestCohort = {
	id: 42,
	subject: "WDI",
	number: 22,
	classroom: 1
};

var alsoBestCohort = {
	id: 43,
	subject: "WDI",
	number: 23,
	classroom: 2
};

var hobby1 = {
	name: "boating",
	cost: "very high"
};

var hobby2 = {
	name: "knitting",
	cost: "low"
};

var hobby3 = {
	name: "cooking",
	cost: "moderate"
};

Q3: var schema = new mongoose.Schema({
				id: numbers,
				subject: 'string',
				number: numbers,
				classroom: numbers,
				name: 'string',
				cost: 'string'});

var GAdata = mongoose.model('GAData',schema);

Q4: I will add id to hobby for better tracking, or a unique locator.
Q5: I will add date or month in the database, which is add to the Schema, add a nickname: 'string' attr. Add teacher: 'string' also
Q6: I will use constructor to work with the Object data Mapper, use the example above, I could use GAdata as my template and create something data is similar to that. For example

var fightClub = new GAdata({id:1,subject:'MMA',number: 3, classrom:1, name:"Ling"})

since we didn't pass cost in to the data base, it will be a empty string but still saved to the server. And if we do something like

fightClub.save(function (err){
	if(err) return (err);
})