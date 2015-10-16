1. Javascript work is the list of tasks that get added to the stack for Javascript to execute.

2. The call-stack is basically the to-do list for Javascript. Depending on the control flow of the
JS code, items get added to the stack in the order that they are to be executed. Then items are 
removed from the stack as they finish. JS can only execute one item on the stack at a time. 

3. When JS code has a timeOut function or when JS executes something that may take a while to complete such 
as querying an API, instead of it delaying the other items in the stack from being completed, it is added to the
task queue once the slower items complete. The event loop routinely checks to see if the stack is clear. When 
it is, it pushes the items in the task queue onto the stack for them to be executed.

4. Blocking is when code that can take a while to execute sits in the stack, not allowing other code to run,
slowing everything down, and making a user's experience misserable. Things like querying data bases or 
processing images can take a lot of time to complete. Using the timeOut function in JS can allow other 
code to run while heavier code executes and then gets added to the task queue and then, eventually to 
the stack once the stack is clear.


