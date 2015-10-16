 [
    {first_name: "Mister", last_name: "Robot"},
    {first_name: "Stanley", last_name: "Steemer"},
    {first_name: "Action", last_name: "Bronson"},
    {first_name: "Jillian", last_name: "Murphy"},
    {first_name: "Nichole", last_name: "DeJarden"}
  ].forEach( function(person) {
    user.create(person, function(person){
      return person;
    });
  });



function Model(name) {
	this.type = name;
	this.data = [];
	this._id = 0;
}

Model.prototype.create = function(objectProperties, callbackFunction) {
	var objectContainer = {};
	objectContainer.subData = objectProperties;
	this._id++;
	objectContainer._id = this._id;
	objectContainer.timestamp = new Date();
	this.data.push(objectContainer);
	return returnThis(objectContainer);
};

var car = new Model('car');
car.create({year: 1964: "Mustang", make: })
Model.prototype.findById = function(objectId, callbackFunction) {
	for (var i = 0; i < this.data.length; i++) {
		if (objectId === this.data[i]._id) {
			return returnThis(object);
		};
	};
};

var found = person.findbyId(1, returnThis);



