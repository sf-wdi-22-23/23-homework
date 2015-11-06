
What is JavaScript work?

Javascript has a heap and a call stack. The heap is for memory allocation and the call stack is where processes are executed. The call stack can send requests to an API, but that does not mean JS stops executing its other tasks. Once a request is made into the API and the API has a response it sends it to the task queue which will wait until the call stack is empty to send that API response to the call stack and execute the process. 

What is the call stack? Why is it there?

The call stack is a limited processing space that can only execute one thing at a time. It records where in the program we are. If we call a function it pushes on top the stack and when that function returns it pops off the stack. 

What is the event loop? Why do we have it? Is it a part of the JavaScript language?

The event loop just checks the stack to see if the stack is empty. IF the stack is empty it will push the events in the task queue (one by one) into the call stack. It is not a part of the JS language. I believe it lives on the browser as does the task queue. 


What is blocking? How can it slow down your code? How can avoiding it speed it up?

Blocking is when you have REPETITIVE slow processes going on in the call stack in a synchronous manner. While there is something happening in the call stack it does not let the page render the update. The way to speed it up is to set up the processes in an asynchronous manner which will send all the long events to the API and the task queue. In between each of the times that task queue sends a single event to the call stack the update will render. 