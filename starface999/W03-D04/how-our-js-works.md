1: unsure what you mean by that question.

2: A Call Stack is what a programming language may execute. JavaScript is a “single-threaded” coding language, which means that it can execute one thing at a time. The call stack records where in the code the execution is taking place. Imagine a pile of things that build up as the code is being executed, for example as one function is called by another function. The computer adds layers to the stack as it attempts to evaluate and execute called functions.

3: Blocking is the situation in which a request that goes through the network, triggered in the browser, freezes the browser as it waits for a response. The solution is asynchronous callbacks.

4: The event loop is the sort of backlog of executions that build up as a user clicks through their browser. The bottleneck is in the call stack, where bits of code are executed.