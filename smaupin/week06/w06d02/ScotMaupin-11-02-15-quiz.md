# UX and Workflow #

## Write a brief and complete user narrative for your favorite user interaction with any web application or mobile app. ##
	User Narrative for -- www.mmajunkie.com
	1. user lands on the site, upon which is displayed many article headers and snippets in a stack.
	2. User clicks on one story.
	3. User is redirected to the static page for that story.
	4. User reads story, looks at images.
	5. User can read or add to comments below
	6. User is enticed by smaller images and headlines to create clicks to other stories both on the site and on third party sites.


## Describe in your own words what it means to build an application 'outside-in'. ##
	It means to consider the order of doing things to be outside to inside where outside represents the pieces closest to the client and user, and inside represents the pieces closest to the server and farthest from the user. It lets your workflow do front end first, sort the problems and bugs out there, then proceed toward the back end step by step so that they all work every step of the way and there is less chance for the whole thing to not work, and a greater chance that if/when it doesn't work, you have a better idea of where the problem would be.


## Name three of your favorite and most effective debugging techniques. ##
	1. console logging
	2. using debugger (which i never remember to use)
	3. googling the error, pouring over other people's solutions or solution attempts to see if there are things there I can apply to my own code.

# PROJECT 1 Review #

## Write a brief step by step of what workflow process you ended up doing for Project 1. For example, maybe you wrote user narratives first, then drew a schema drawing, and then started templating. Feel free to reference your Project 1 code and materials and break up your answer by day. ##
	1. Came up with general idea while looking for problems that could be solved practically through programming
	2. researched to see if the problem had already been solved well elsewhere
	3. wireframed the basic idea I had in mind.
	4. Wrote user stories for the types of user I had in mind, and the way I envisioned them using the app.
	5. built the front end framework
	6. started moving what I could into partials to keep the code small and organized.
	7. Started working on the back end and ajax requests.
	8. Heavily refactored the front end of the site.
	9. Back to working on troublesome ajax requests.
	10. anger, frustration, discouraged, demoralized, ready to quit
	11. CSS Styling



## Write what workflow do you wish you had done and what will your workflow look like in future projects? ##
	1. Ideas/brainstorming
	2. Research
	3. Wireframes
	4. User Stories
	5. Think on database and schemas that will be needed
	6. front end
	7. back end
	8. styling


## Recall a problem you had or are having with your project 1 and write a sample stackoverflow.com question. ##
Remember to include
What you're trying to accomplish
What you've tried already
What error you are receiving or problem you are having
Relevant, brief code samples
Resourcefulness

	### SAMPLE STACK OVERFLOW QUESTION: ###

	I want to include a delete button on this input field to delete the field, but also persist when the page is reloaded. I got a delete button working to remove the div containing the input field from the page, but not change the code, so when another person opens the link or when I refresh my page, the input field and button are still there.

	here is my input field div for the ejs template. (partially working delete button has been removed)
		<div class="input-group">
		  <label for = "urls"></label>
		  <input type="url" pattern="https?://.+" name="urls" class="form-control url-text" placeholder="Type or Copy/Paste your link here beginning with 'http' or 'https'" id="url" autocomplete="off">
		  <span class="input-group-btn">
		    <button class="btn btn-active url-add-btn" type="submit">Add Url</button>
		  </span>
		</div>




## Although you might know nothing about Python, imagine you've been asked by your employer or client to find the best Django module for doing authentication. (Django is like Rails but built in python). Pick the Django module you'd use and list the pros and cons of why to use or not use it and why you think it is the best. ##

	Id use django.contrib.auth because 
	1. that's the only module for authentification I could find.
	pros:
		- It seems to be the standard. I can find no other method that doesn't use contrib.auth
		- According to the django documentation it suports extensive extension and customization
	cons: 
		- not sure if there is a better module, because I couldn't locate any others
		- not sure if this is even a module, because I couldn't locate that information, but couldnt find anything to suggest it wasnt.
		-not sure if this is the correct answer, because like with a lot of the questions given in a large percentage of the homework or instructions, it is unclear to me what the question is actually looking for, how to answer it, or where to go about finding the answers in the first place. If this answer is way off base or makes no sense, it's because that's about the best I can do with parsing the instructions or guessing at what they are asking me to do. I generally get to this point and just feel very frustrated and stupid with the material. Shuts me down.
