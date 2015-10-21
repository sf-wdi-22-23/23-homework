//What is JavaScript work? ^o^ [x]

Javascript works as a single-threaded program language. It has a single callstack and runs a single piece of code at a time.

//What is the call stack? Why is it there? [x]

The callstack is a data structure which records where in the program we are.

It is there to help track the steps that the code is following and to make sure it is all running properly

//What is the event loop? Why do we have it? Is it a part of the JavaScript language?

The event loop is a Javascript tool that looks at the stack and the task queue.  If the stack is empty, it takes the first thing in the task queue and pushes it to the stack.

We have it so when any web APIs have pushed back any callback functions, the event loop can put it back into the callstack, once empty, to be run.

//What is blocking? How can it slow down your code? How can avoiding it speed it up? [x]

Blocking is code that is slow.

It can slow down your code because we run code on browsers, and if the browser gets blocked then it gets stuck and cannot doing anything else.

We can avoid it by using asynchronous callbacks
