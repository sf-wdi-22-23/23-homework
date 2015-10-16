What is JavaScript work? ^o^

Javascript is a single source programming language.

What is the call stack? Why is it there?

	The call stack is like the order of operations.  Javascript can only run one piece of code at a time, so it stacks them up and goes through them in order, moving to the next piece after the previous has been completed and removed from the stack.

What is the event loop? Why do we have it? Is it a part of the JavaScript language?

	The event loop adds a task to an empty stack, when its empty.  Even though Javascript can only handle one task in the stack at a time, the event loop allows it to run other stuff concurrently.  I dont really understand how

What is blocking? How can it slow down your code? How can avoiding it speed it up?

Blocking is when there is a task in the callstack that takes a while to complete, like a big image load, for example.  Because Javascript has a single call stack, other tasks in the stack must wait for the big image load to finish before they can be queued up and completed, essentially blocking the stack and pausing all other work.  If we avoid it, other tasks in the stack won't be blocked.