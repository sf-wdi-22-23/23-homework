Scot Maupin Homework from Wednesday, October 14, 2015

// Look at the data inside this directory's data.js file. How would you model this data with JavaScript object types?

A: I'd make an object that is for data, split into an array of objects. In this one for Cohorts and one for Hobbies, and place their values inside in key-value pairs:

	var data = {
		cohorts: [{
			id: 42, 
			subject: "WDI",
			number: 22,
			classroom: 1
			},
			{
			id: 43,
			subject: "WDI",
			number: 23,
			classroom: 2
			}],
		hobbies: [{
			name: "boating",
			cost: "very high"
			},
			{
			name: "knitting",
			cost: "low"
			},
			{
			name: "cooking",
			cost: "moderate"
			}]
	}

// Imagine we're storing and working with a large amount of hobbies. What attributes would you include on a Hobby object type? What methods might you create for a Hobby object type to help us manage hobby data?

A: I'd want to include a unique ID number, so that hobbies with either the same name or cost could be distinct and not conflated accidentally. To make the data more useful to the user I might also include key categories like "number of people neded", "age range", "indoor or outdoor", "time commitment", and other categories that people might want to sort or search through the data by.

Methods would be a get-method to look through and find results based on one or more key or object searchterms, and a post-method that could let you add new data to the list of hobbies. Also a patch-method which would allow me to update the data of a certain attribute without disrupting the structure, and a delete-method to eliminate a hobby based on id.

// Imagine we're storing and working with a large maount of cohorts. What attributes would you include in a Cohort object type? What methods might you create for a Cohort object type to help us manage cohort data?

A: In addition to the attributes already there, I'd want to maybe include "Start date", "Finish Date", "GA Location". I would include the same method described on the question above to allow to add and modify the data and make it more usable.

// Think back to the lab from today and to other interactions you've had with data. Object data Mappers give us tools to work with any kind of data. What attributes might you give a generic DataObject object type? What methods might you give a generic DataObject object type based on the ways weve been using data so far?

A: Id stick with the same methods described above. Mainly because I don't know of other methods, and my current understanding of methods is that those are the ones, and those are the useful ones. Maybe I'm off. I'd also add things that can be used to both group the data into single results upon search or sorting (like a unique ID number) but also try to add attributes that searching and sorting by would create subsets. It would depend on the data for what these attributes could be, but that's how I'd approach looking at data and structuring it for use by others.