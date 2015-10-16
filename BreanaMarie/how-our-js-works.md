What is JavaScript work? ^o^
javaScript is where memory allocation happens in the heap and then the stack wich does the execution.


What is the call stack? Why is it there?
The call stack keeps track of the order that a page will be exicuted in.  As the program moves down a page, it sends a list of things to do into the call stack to be exicuted in a speific order.  The stack allows a single threaded script like Javascript to orgnize the order of exicution, but send things to a call back queue to wait after the exicution is done.  the stack can only be added to the top of or removed from the top, nothing can be put in the middle or removed from any other place than the top.

What is the event loop? Why do we have it? Is it a part of the JavaScript language?
the event loop cosists of things moving from the heap to the stack to the API to the callack queue.  The event loop is not part of the JavaScript language but is ustilized by it.  It is nessisary part of how JavaScript works because it allows a specific order to exicute functions in, so that a developer can predicted how the program will behave.  without it functions could fire off at any given time, an cuase all sorts of issues with predictability.  With the event loop functions can be set to run in order, and send events off to an api that will then come back to the callback queue to wait to be exicuted to the client the intended way.


What is blocking? How can it slow down your code? How can avoiding it speed it up?
blocking happens when the CPU is overloaded with requests that take lots of calculations .  Since the code is syncronous, when something is sent off to the api that maybe takes forever to get back, or maybe doesint exists, in the middle of the stack it can bring everything to stop. The render wants to happen, but it can't untill the stack is epty. Until the process is done and frees up the render nothing else will happen. Avoid asking for everything, ask for just what is needed for your program from an api, an example from class was aksing for the whole object instead of just the body of an object which is what we needed.  If the things that require lots of time on the callstack, break them up accross the stack so that the event loop can render perirodically.  
