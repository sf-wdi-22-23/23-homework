To organize the data, you can start by creating two separate variables - bestCohorts and hobbies. You can input bestCohort and alsoBestCohort information into var bestCohorts. Input hobby1, hobby2, and hobby3 into hobbies. This way, you consolidate the data. 

var bestCohorts = {cohort: {id:42, subject:"WDI", number:22, classroom:1}, {id:43, subject:"WDI", number:23, classroom:2}};

var hobbies = {hobby: {name:"boating", cost: "very high"}, {name: "knitting", cost:"low"}, {name: "cooking", cost:"moderate"}};



To access the data in hobbies, you can assign IDs to each hobby. You can also add outdoors or indoors and popularity. You can use methods such as .sort(), where(), mostPopular().



I might add instructor names and the number of students to the cohorts. You can call methods to find number of students, or by instructor's last name, or the cohort's id. 
where(), byClassroom(), numberOfStudents().


For a generic DataObject, you definitely might want to give it a unique id. You might also want to assign attributes like date and time of entry. Assigning date / time can allow us to find information about an object that was entered at a specific date or time even without knowing what the data is. 
where(), byName(), byId(), entryDate().