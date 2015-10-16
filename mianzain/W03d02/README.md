Q:.Look at the data inside this directory's data.js file. How would you model this data with JavaScript object types?
//A:.as per my Knowledge after seeing the data it redundant,so best way to solve is to create a constructor.


Q:.Imagine we're storing and working with a large amount of hobbies. What attributes would you include on a Hobby object type? What methods might you create for a Hobby object type to help us manage hobby data?
//A:.We should include the "this" because value of function depends on it. for e.g var hobbies= function(hobby , price){
//																				  this.hobby=hobby,
//																				  this.price=price 		
																				   }	


Imagine we're storing and working with a large maount of cohorts. What attributes would you include in a Cohort object type? What methods might you create for a Cohort object type to help us manage cohort data?
//A:. Id is the attribute which i will include  

var cohorts = function (studentId ,course ,classoom, year){
//     this.studentId = studentId,	
//     this.course = course,
//     this.classroom = classroom,
//     this.year = year
}																				   
Q:.Imagine we're storing and working with a large maount of cohorts. What attributes would you include in a Cohort object type? What methods might you create for a Cohort object type to help us manage cohort data?
//A:. I think "course" and "year".

Q:.Think back to the lab from today and to other interactions you've had with data. Object data Mappers give us tools to work with any kind of data. What attributes might you give a generic DataObject object type? What methods might you give a generic DataObject object type based on the ways weve been using data so far?
//A:. i thing but not sure is href