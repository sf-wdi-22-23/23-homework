#Jorge's Quiz

##UX and Workflow

1. Chatty Patty likes to keep in touch with all the friends she has made over the years. As an added bonus of browsing through the newsfeed and seeing her friends' updates, with Facebook Messenger she gets to see when her friends are available to chat. Patty can catch up quickly rather than texting her friends when they might be unavailable to respond. She can type messages and see a "..." bubble when she or her friend is typing. And she can also see the time and date when her friend read the message. 

1. Building an application outside-in means to build the skeleton of the application first. Starts with the basic layout, and then start building the client side and server side routes to create functionality. Start with what the user is doing and move towards what you do with the information the user is giving you, then work with what you will send back to the user. 

1. 	*console.log
	*When there is an error I cant find with console.log go through the entire path, from user input, client side, server data management, response.
	*

##Project 1 Review
1. My work flow.

		        *Wireframed what the pages would look like.
		        *Wrote user narratives to determine what functionalities I would want.
		        *Read through Google Maps API documentation to see what information I could use and what I needed
		        *wireframed schemas/models/relationships
		        *basic bootstrap layout
		        *incorporated basic map functionality
		        *built ejs forms
		        *used jQuery to get input from forms
		        *ajax requests
		        *server data management
		        *respond to client side JS
		        *respond to user


1. I wish I had done a bit more wireframing but I thought my work-flow allowed me to have a well-rounded project. I would like to become more efficient to be able to incorporate more functionalities in a short amount of time. 

1. While attempting to use google maps autofill to search: 
	
	I am trying to switch from using Google's .SearchBox method to using .Autocomplete for my Google Maps search bar. The reason being that I would like to be able to filter the autocomplete to only display a certain type of businesses which is not supported while using .SearchBox. I was able to get the search bar to display the autofill but it would not return any objects to extract data from, and it would not work when I tried using a type filter in the options. 

	I got the following code to return the object of the best match for any search but it is an unfiltered search.

```js 

	var initAutocomplete = function () {
      
    //Searchbox
    var searchBox = new google.maps.places.SearchBox(document.getElementById("map-search"));
      

	    //Need to set bias to current city and business type to bars only!!!


	    // Bias the SearchBox results towards current map's viewport.
	      map.addListener('bounds_changed', function () {
	      searchBox.setBounds(map.getBounds());
	      });


	      // Listen for the event fired when the user selects a prediction and retrieve
	 		 searchBox.addListener('places_changed', function () {
	    		var places = searchBox.getPlaces();
	     	 	place = places[0];

      			if (places.length === 0) {
        		return;   
      			}
    	});
  	};

```

### Here is what I couldn't get to work:

 ```js

 var options = {
  bounds: defaultBounds,
  types: ['establishment']
};

autocomplete = new google.maps.places.Autocomplete(input, options);

```

##Resourcefulness

I would use Django Social Auth. Using the providers that support the feature like:

	*Google OpenID
	*Google OAuth
	*Google OAuth2
	*Yahoo OpenID
	*OpenId like myOpenID
	*Twitter OAuth
	*Facebook OAuth

The main advantages I see:

	*User has already input their information and can create an account with the touch of a click.
	*User might feel at ease knowing that the information is stored in a major company's database with their security team in charge.
	*No need for form creation and maintenance, and perhaps reduced security needs. $$$

Some disadvantages might be:

	*Might make it more difficult to request specific information in the future. 
	*Some users do not like linking their social accounts to another application.


