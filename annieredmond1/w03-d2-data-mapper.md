
Look at the data inside this directory's data.js file. How would you model this data with JavaScript object types?

	I would create an array of cohorts and an array of hobbies

Imagine we're storing and working with a large amount of hobbies. What attributes would you include on a Hobby object type? What methods might you create for a Hobby object type to help us manage hobby data?

	attributes I would include for hobbies are: name, cost, category, popular.  Some methods would be where(), costBelowX(), mostPopular()

Imagine we're storing and working with a large maount of cohorts. What attributes would you include in a Cohort object type? What methods might you create for a Cohort object type to help us manage cohort data?

	attributes id, subject, classroom, number.  methods where(), bySubject(), byClassroom().

Think back to the lab from today and to other interactions you've had with data. Object data Mappers give us tools to work with any kind of data. What attributes might you give a generic DataObject object type? What methods might you give a generic DataObject object type based on the ways weve been using data so far?
	
		attributes name, id  methods where(), byName(), byId().