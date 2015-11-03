3. Look at the data inside this directory's data.js file. How would you model this data with JavaScript object types? 

I would group the data into a single object that contains two arrays - one that holds information about cohorts and the other would hold information about hobbies.

{[var bestCohort = {
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
};],

[var hobby1 = {
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
};]}

4. Imagine we're storing and working with a large amount of hobbies. What attributes would you include on a Hobby object type? What methods might you create for a Hobby object type to help us manage hobby data?

I would add a difficulty attribute. I would create a method that would organize all hobby items so that they contain the same order of properties.

5. Imagine we're storing and working with a large amount of cohorts. What attributes would you include in a Cohort object type? What methods might you create for a Cohort object type to help us manage cohort data?

I would add a student attribute that would contain an array of all the students in the cohort. I would create a method that would group items that shared the same key: value pairs.

6. Think back to the lab from today and to other interactions you've had with data. Object data Mappers give us tools to work with any kind of data. What attributes might you give a generic DataObject object type? What methods might you give a generic DataObject object type based on the ways weve been using data so far?

I would give an attribute of data type. Of data length. I would give a method that listed all its attributes. 