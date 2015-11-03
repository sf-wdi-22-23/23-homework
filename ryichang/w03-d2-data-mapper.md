Imagine we're storing and working with a large amount of hobbies. What attributes would you include on a Hobby object type? What methods might you create for a Hobby object type to help us manage hobby data?

I would include an unique id for each hobby in each respective properties instead of the variable. For example the first hobby:
Hobby B = repository.GetHobby(1); 
String name = B.getHobbyName();
Hobby B = Hobby.Get(1);
Hobby1 = Hobby.Get(Hobby.Id == 1); 

To make sorting easier, I would incorporate indoor and outdoor to each hobby. 

Imagine we're storing and working with a large amount of cohorts. What attributes would you include in a Cohort object type? What methods might you create for a Cohort object type to help us manage cohort data?

For Cohort attributes, I would include quarters and years for each individual cohort. This way, the cohort can be pulled more easily. Such as: 
In terms of methods, I would either use the ID or year and quarter.  

var bestCohort = {
	id: 42,
	subject: "WDI",
	number: 22,
	classroom: 1,
	year: 2015
};

var alsoBestCohort = {
	id: 43,
	subject: "WDI",
	number: 23,
	classroom: 2,
	quarter: 4, 
	year: 2015
};

Think back to the lab from today and to other interactions you've had with data. Object data Mappers give us tools to work with any kind of data. What attributes might you give a generic DataObject object type? What methods might you give a generic DataObject object type based on the ways we've been using data so far?

In terms of generic DataObject object type, I would assign ID because it is unique and names for search to be easier. If something is a generic DataObject object type, I would just search by ID. 