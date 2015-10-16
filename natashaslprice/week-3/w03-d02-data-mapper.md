1. Look at the data inside this directory's data.js file. How would you model this data with JavaScript object types?

var Cohort = function(id, subject, number, classroom) {
	this.id = id;
	this.subject = subject;
	this.number = number;
	this.classroom = classroom;
};

var bestCohort = new Cohort(42, "WDI", 22, 1);
var alsoBestCohort = new Cohort(43, "WDI", 23, 2);

var Hobby = function(name, cost) {
	this.name = name;
	this.cost = cost;
};
var hobby1 = new Hobby("boating", "very high");
var hobby2 = new Hobby("knitting", "low");
var hobby3 = new Hobby("cooking", "moderate");



2. Imagine we're storing and working with a large amount of hobbies. What attributes would you include on a Hobby object type? 
What methods might you create for a Hobby object type to help us manage hobby data?

Attributes:
- id
- name
- cost
- location

Methods:
- Hobby.prototype.doHobby = function() {};
- Hobby.prototype.deleteHobby = function() {};


3. Imagine we're storing and working with a large maount of cohorts. What attributes would you include in a Cohort object type? 
What methods might you create for a Cohort object type to help us manage cohort data?

Attributes:
- id
- subject
- number
- classroom

Methods:
- Cohort.prototype.learn = function() {};
- Cohort.prototype.homework = function() {};
- Cohort.prototype.discuss = function() {};


4. Think back to the lab from today and to other interactions you've had with data. Object data Mappers give us tools to work with any kind of data. 
What attributes might you give a generic DataObject object type? What methods might you give a generic DataObject object type based on the ways 
weve been using data so far?

Attributes:
- id
- name

Methods:
- do
- where
