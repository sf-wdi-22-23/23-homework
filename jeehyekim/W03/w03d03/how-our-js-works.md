1. What is JavaScript work? ^o^
It's a single threated program meaning that it can do one thing at a time. 



2. What is the call stack? Why is it there?
It helps us keep track of where we are in the program. 




3. What is the event loop? Why do we have it? Is it a part of the JavaScript language?
Event loop has the job to look at the stack and the task. If the stack is empty, it takes the first thing on the queue and then pushes it onto the stack. 

The stack always has to be clear before whatever is in the queue can be pushed back into the stack to be executed. 


4. What is blocking? How can it slow down your code? How can avoiding it speed it up?

Blocking is code that is slow. Its a problem because we run code in browsers. The browser might register that the user is doing other things in the browser but not be able to perform them before a previous function or code renders first. Causes bad user experience. 
