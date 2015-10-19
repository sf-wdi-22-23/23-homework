Scot Maupin - WDI - 23 - Thursday, October 15 - Homework


1. What is JavaScript work? ^o^

This question is phrased oddly, but I'll resond based on how I'm understanding it. JavaScript work is for instance a developer that works writing functions, and larger chunks of JavaScript to use by themselves and others in larger code applications.

2. What is the call stack? Why is it there?

The call stack is essentially the final queue for all tasks/commands/messages that the computer can accept one by one. It is there to give a heirarchy and allow the computer to not get bogged down and process things in a specific order.

3. What is the event loop? Why do we have it? Is it a part of the JavaScript language?

The event loop is the thing that runs at the end of an event, or it checks when the callstack is all empty (the event has finished) and then if there is something in the task queue it throws it onto the stack. It will repeat this process until there are no more things on the task queue to throw onto the stack.

4. What is blocking? How can it slow down your code? How can avoiding it speed it up?

Blocking is any operation that takes time within the stack and blocks the client from doing anything else, like scrolling or clicking or typing, while the stack deals with the request at hand. It would be better to deal with that in a different asynchronous way where the user can still do things on the site or app while the task that takes longer does its thing.
