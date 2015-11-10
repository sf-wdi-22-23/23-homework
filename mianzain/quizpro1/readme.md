#Write a brief and complete user narrative for you're favorite user interaction with any web application or mobile app.
I think apple.com has the best user interaction because when we land on the page everything we are looking for is on landing page every think at there page is super responsive and anyone can go through the process in minmum steps and at every step there is logic behind that.whole experience is human center.


#Describe in your own words what it means to build an application 'outside-in'.
A software development approach that redefines who stakeholders really are, outside-in development (OID) encourages teams to work together to benefit these stakeholders.
Outside In is a way to focus an organisation on doing one thing,achieving one goal and doing it right.By focusing the organisation on this one goal,the unnecessary complexity of all other things that do not contribute to this goal can be eliminated.


#Name three of your favorite and most effective debugging techniques.
1.console.log
2.debugger
3.filter source code for certain strings to make sure reference names match up with object names


#Write a brief step by step of what workflow process you ended up doing for Project 1. For example, maybe you wrote user narratives first, then drew a schema drawing, and then started templating. Feel free to reference your Project 1 code and materials and break up your answer by day.
Ans.I am making an app where user can see pictures of Food Plating make comment on it and if user want to see recipe user can click on it and will be redirected to 3rd party recipe website.
For schema Drawing please refer to this link,(https://trello.com/b/lm6YD1Mq/project-1-foodish)

#Write what workflow do you wish you had done and what will your workflow look like in future projects?

1.My first step was front end styling and bootstap.
2.second step was setting up the server
3.third step is finding and setting up the API 
4.fourth step was i used Jq for logics
##explaination for that.
1.create a template based on the structure in the html.
2.an index.html file with static data directly in the file
3.use the template to display dynamic data from a temporary array on the client
4.move the data to a temporary array on the server and get it with a GET call to a route on the server for comments
5.move the data to your database
6.Splash Page
7.make a route to post comments on server (ajax)
8.make a button that allows you to post a specific instance of a model
9.API call to get the data
10.Validation working

#Recall a problem you had or are having with your project 1 and write a sample stackoverflow.com question.
##Ans.How we can filter data from express schma server.
I was tring to fix data in that was keep on repeating again and again.
var publishSchema = new schema ({
 
 platingAPIId: { type: String, unique: true }, // will prevent multiple occurences of foods with same recipe ID
 // searchTerm: String, // if you specify the searchTerm that is used to find the food, you can specify it in the find() call
 name: String, 
 comments : [commentSchema],
 image_url: String,
 f2f_url: String,
 tag: String

});







