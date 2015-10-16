1.

var cohortObject = {	cohort: {	{	id: 42,
																	subject: "WDI",
																	number: 22,
																	classroom: 1},
																{	id: 43,
																	subject: "WDI",
																	number: 23,
																	classroom: 2}
															},
};

var hobbyObject = { hobby: {
														name: "boating",
														cost: "very high"
														},
														name: "knitting",
														cost: "low"
														},
														name: "cooking",
														cost: "moderate"}
	
};


2. I would include the following attributes in the hobbys object:
			outdoors or indoors
			weather
			solo or group
			tools.
		I would use methods such as .sort(); isCostLow(); isGroupActivity(); etc...

3. If we were working with a large number of cohorts, I would include the following object types:
		ID number
		course
		start date
		classroom number
		subject
		number of students enrolled
		teacher
To manage the cohort data I would create methods such as 
		sortByClassroomNumber();
		sortByClassSize();
		sortByStartDate();

4. If I were working with a generic object type, I would use methods like 
		.sort();
		.getIndexOf();
		.attr();
		.push();
		.splice();
		.value();
	Many of these we used in class today!
	I would give the generic object a console.log(genericObject); and maybe an eventListener();


