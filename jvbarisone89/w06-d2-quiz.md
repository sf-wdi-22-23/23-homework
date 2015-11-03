#UX and Workflow

1.Write a brief and complete user narrative for you're favorite user interaction with any web application or mobile app.

John lives in San Francisco where the weather is suseptible to quick and drastic changes. He wakes up each morning and opens his weather application in order to decide how he should dress for the day. The application has a clean interface that determines his location and displays in large font the current weather condition. John can swipe up on the current weather temp and view an hourly forecast that shows the expected temperature and weather condition (i.e. cloudy, sunny, rain) throughout the day, allowing him to prepare accordingly. 

2.Describe in your own words what it means to build an application 'outside-in'.

'Outside-in' design places an emphasis on the user experience by first establishing the interface of the application before creating backend functionality like databases and user login.

3.Name three of your favorite and most effective debugging techniques.

I console.log variables in order to confirm the values are what I expect them to be. For server side I started catching errors and console.log'ing those as well. 

#PROJECT 1 Review:

1. Write a brief step by step of what workflow process you ended up doing for Project 1. For example, maybe you wrote user narratives first, then drew a schema drawing, and then started templating. Feel free to reference your Project 1 code and materials and break up your answer by day.

- I started with user narratives and drew a wireframe of my application. From here I built the bootstrap html framework. 

- After I had a basic framework I started with the basic client-side functionality (to-do list).

- Once I had the to-do list working on the client side I started to build models in order to save the to-do lists in the server.

- After I was saving to-dos in my database I updated my todo models to include a progress bar.

- Once I had the progress bar working I tried to get the client side in sync with the server-side.


2. Write what workflow do you wish you had done and what will your workflow look like in future projects?

In the future I would have liked to have established a more coherent set of functionality for each stage of the development process, and have a better understanding of each piece of functionality before attempting to build it. By the middle of the second week I was working on several different pieces of my project in order to meet requirements (login, server side-rendering, additional models) that I think I was spreading my efforts thin in too many places, and in turn didn't accomplish what I had hoped.

3. Recall a problem you had or are having with your project 1 and write a sample stackoverflow.com question. Remember to include
    What you're trying to accomplish
    What you've tried already
    What error you are receiving or problem you are having
    Relevant, brief code samples

What I'm trying to accomplish: Update the name of an item in my dom and have that change reflected in my database, using the same server route that updates other properties of my object.

What I've tried already: 

What error you are receiving: Can't recall at the moment.

Here's my current put route: 

app.put('/api/banks/:id', function(req, res) {

    db.Bank.findById(req.params.id, function(err, bank){
    var progress_added;
        if ((parseInt(req.body.progress_added) === '' || 'NaN')){
        progress_added = 0;
    } else if (err){
        res.json(err);
        console.log('This route didnt work!');
    } else if ((bank.progress_added + progress_added) > bank.price){
        res.json(err);
        console.log('Too much progress added');	
    } else {
        bank.progress_added += progress_added;
        bank.itemName = req.body.itemName || bank.itemName;
        bank.save(function(err, bank){
        if (err) {
            console.log(err);	
        } else {
            console.log(bank);
        res.json(bank);
    }
});
}
});
});


#Resourcefulness:

Although you might know nothing about Python, imagine you've been asked by your employer or client to find the best Django module for doing authentication. (Django is like Rails but built in python). Pick the Django module you'd use and list the pros and cons of why to use or not use it and why you think it is the best.

I would use Django-Guardian because it appears to be the most popular and has clean documentation. According to Djangopackages.com it has the most stars on github and is stable.

