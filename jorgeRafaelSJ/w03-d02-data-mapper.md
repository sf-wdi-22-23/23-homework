How would you model this data with JavaScript object types?

	//Looking at the data it seems redundant so it would be better to create a constructor.

	var CohortClass = function(id, subject, number, classroom){
		this.id = id,
		this.subject = subject,
		this.number = number,
		this.classroom = classroom 
	}

	var hobby = function(name, cost){
		this.name = name,
		this.cost = cost
	}




Imagine we're storing and working with a large amount of hobbies. What attributes would you include on a Hobby object type? What methods might you create for a Hobby object type to help us manage hobby data?

	//It would probably be good to ad an "id" attribute. An activity type attribute that could describe passive or active and maybe another for indoor or outdoor. Perhaps It would be helpful to have a method to determine what the id should be and assign it to the id attribute. Maybe it would be helpful to have a method to sort hobbies by cost level. A good method would 'AddNewHobby', perhaps 




Imagine we're storing and working with a large amount of cohorts. What attributes would you include in a Cohort object type? What methods might you create for a Cohort object type to help us manage cohort data?

	//It would be useful to have attributes for the "classSize", "instructors". 

	//For methods it would be useful to use addNewCohort. 





Think back to the lab from today and to other interactions you've had with data. Object data Mappers give us tools to work with any kind of data. What attributes might you give a generic DataObject object type? What methods might you give a generic DataObject object type based on the ways weve been using data so far?

	//An href attribute the object's url. 
	//An image thumbnail src?










