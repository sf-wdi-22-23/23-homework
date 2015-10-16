What is JavaScript work? ^o^

Javascript is a single-threaded non-blocking asynchronous concurrent language. Basically, it runs one thing at a time, through the order of web api, queue, and finally the stack to be executed. 



What is the call stack? Why is it there?

There is basically on thread, one call stack, and Javascript runs one thing at a time. The order goes through the web api, queue, and then executes. 



What is the event loop? Why do we have it? Is it a part of the JavaScript language?

The event loop is to look at the stack and the task queue. If the stack is empty, it takes the first thing on the queue and pushes onto the stack, this is part of the Javascript language. 



What is blocking? How can it slow down your code? How can avoiding it speed it up?

Blocking is when a code is slow, things that are on a stack which are slow are essentially blocking. The way to bypass this is with asynchronous callback.  