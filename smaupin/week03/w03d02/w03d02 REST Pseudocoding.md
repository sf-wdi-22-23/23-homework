Scot Maupin

--------------
Say we want to create an API similar to the one above, that returns data about icecream. We need to be able to get information about specific flavors, as well as all of the flavors we have in our database. We also want to get some flavors by category, like "fruity", "gluten free", or "chunky". Finally we want to add one POST route that allows users of our api to add new flavors!

Write Pseudocode like the above. Be creative, and follow RESTful conventions and best practices.
---------------

DATA ABOUT ICE CREAM:

SPECIFIC FLAVORS - 									"/api/flavors/:id"
ALL FLAVORS - 										"/api/flavors"
FLAVORS BY CATEGORY - 								"/api/flavors/categories/:id"
	i.e. FRUITY - 									"/api/flavors/categories/fruity"
	i.e. GLUTEN FREE - 								"/api/flavors/categories/gluten-free"
	i.e. CHUNKY -									"/api/flavors/categories/chunky" 

POST ROUTE THAT ALLOWS USERS TO ADD NEW FLAVORS - 	POST "/api/flavors/:id"

I think (hope?) this is what you were wanting, answer-wise.