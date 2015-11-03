UX and Workflow
===============

Answers:
--------

  1. User "Annie the searcher" goes to the homepage, google.com and types a question she doesn't know the answer to in the search bar.  She then views all the search results and clicks the link she mostly likely thinks will answer her question.  If that doesn't answer her questions she goes back to the results and tries another link.
  2. Building an application from the outside in, means that at every step (starting with mvp), you start with the html/bootstrap, then javascript, then server, then database (then jquery??). Basically it means that you start with what the user most sees and go towards what the user least sees.
  3.  1. CONSOLE LOGGING!!! 2. Understanding error messages 3. Walk through all related code and double check stuff (but this does take a really long time)


Project 1 Review
================

Answers:
--------

1. I worked on my steps first (scope of project).  Then I worked on my user narratives, wireframing and models.  Then I reworked all of these again until I was happy with the project.  Then I got the project approved and went to work.  I did end up revising the user narratives and wireframe partway through (I think on the 3rd or 4th day).
2. I spent too much time working on stuff before modifying my user narratives and wireframe and then I had to redo stuff.  Next time I want to be more solid in my plan before I start so that I don't have to redo anything.
3. I had a problem with my jquery validation.  I was trying to make a confirm password input that would require users to enter their passowrd twice (while ensuring the passwords match).  I've included the jquery validation function, but once the passwords don't match, the error message will not go away after the user fixes the passwords so that they do match.  My validation code looks like this:
```js //validations
  $('#signUpForm').validate({
    rules: {
      email: {
            required: true,
            email: true
          },
      password: {
            required: true,
            minlength: 4
          },
      password2: {
            required: true,
            minlength: 4,
            equalTo: '#inputPassword'
          }
    }
  });
```

Resourcefulness
===============

I would recommend django-allauth for the project.

Pros:
* It's straightforward and can be customized as needed.
* It supports username/password/email registration as well as social registration.
* Hashes passwords


Cons:
* Won't let you alter the information you are getting from the user.





















