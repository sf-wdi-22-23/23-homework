What is JavaScript work? ^o^
What is the call stack? Why is it there?
What is the event loop? Why do we have it? Is it a part of the JavaScript language?
What is blocking? How can it slow down your code? How can avoiding it speed it up?

JavaScript in a bigger picture is the most popular broswer language, and also is the fastest web developing tools with tools like jQuerym AJAX. In a less conceptual understand javascript is a single threaded language, which execute action step by step and following a strict orders. But in a advance understand of JavaScript, it is not entirely single threaded, with event loop, call stack and task que happening in the webapis.

Call stack from my understand is like a to do list with strict orders. It will always goes top to bottom or reverse. The stack exectue one event or action at a time, once the task is completed and will move on to the next one. The reason we have a call stack is to keep the program and orders inline.

Event loop associates with the task que and the call stack, and the task que takes a callback from the webapis and que up the todo tasks in the task que, and event loops is the bridge between the que and the call stack. It will check if the stack is empty or not. if the stack is completed and the event loop will fire the first qued task to callstack and execute that codes. It is part of the webapis but not part of the language.

Blocking is have multiple callbacks and making multi requests on the callstacks. Which will delay and slowing down the speed of the response of the webpage and also your code. To avoide it is have an async callback and don't use dry codes and better handle the callstack with percise actons.
