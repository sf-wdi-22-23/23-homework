

##h2 UX and Workflow


1. Simon, Age 24, Peanut & Dairy Allergy, goes to website, selects his allergies and searches for sushi, only sushi restaurants with reviews that have the same allergy he does pops up due to relevancy / he then sees the restaurants address and visits
2. From Client to Server / wireframes / prototype / client side code set up / client side authentication / working without storing to db currently / then setting up server/ connecting to client / models  etc
3. console.log / terminal / google chrome console


##h2 PROJECT 1 Review


1.
* Day 1 - Ideation/ wireframe/ ux narratives/ grabbing yelps api secret key, setting up template/repo on github/
setting up yelp api in mongo/getting it all working and interacting with the client
* Day 2 - bootstrap/ ajax / user models also wanted working from instructors
* Day 3 - seed data / ajax
* Day 4 - getting seed data to show on page / yelp results also working in mongo quite a bit to see results
* Day 5 - making the allergy filter and for loops all in client side(app.js) / ending up in confusion messy code
* Day 6 - instructor feedback that code looks like spaghetti and theres a better way to do it/ wasn't shown how
* Day 7 - seed data working with ajax and in db wanted to add comments and rewrite client code / had no time 


2. I'd like to work outside in on future projects and focus mainly on the front-end. Not setting up external api's user models and seed data first a habit to kick!


###h3 3. How do I append one or more of the selected allergies to show up during the search and not after I make the ajax request?

The allergy filter to be accurate. for example if I select a Peanut and Dairy allergy, I'd like to see results from people with either one or both of the allergies pop up at the top of the result list.

looping through all users and seed data on the client side to see if it matches the selected allergy within the array

Infinite loop, 300+ loops, client side spaghetti, heartache

#=============================================================#

'''
for (var j = 0; j < response.users.length; j++){
for (var k=0; k< response.users[j].reviews.length; k++) {
if(response.users[j].reviews[k].yelp_id === response.yelpResults[i].id ){
$('#'+response.users[j].reviews[k].yelp_id).append('<div class="captionUser">'+response.users[j].first_name+' </div><div class="reviewStyles">'+response.users[j].reviews[k].review  
+ '</div>');


for(var a=0; a< response.users[j].allergies.length; a++) {
var allergy = response.users[j].allergies[a];
var hasAllergy=false;
 for (var i=0; i <= active.length-1; i++) {
 	if(active[i] === allergy){
 		$('#'+response.users[j].reviews[k].yelp_id).append('<div class="allergy selectedAllergy"> '+ allergy +'</div>');
        hasAllergy=true;
    }
};
if(hasAllergy===false) {
$('#'+response.users[j].reviews[k].yelp_id).append('<div class="allergy"> '+ allergy +'</div>');
}
'''

#=============================================================#


####h4 Resourcefulness

- I'd use Django allauth 
* helps achieve higher signup/registration rate
* helps obtain extra user information through their social profile
* Enables to promote your product or service through social user profiles

*Found online reasoning 
The difference between inheriting from a Django abstract class and inheriting from Python's object is that the former is treated as a database object (so tables for it are synced to the database) and it has the behavior of a Model. Inheriting from a plain Python object gives the class (and its subclasses) none of those qualities.

