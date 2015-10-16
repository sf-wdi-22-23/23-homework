1. Javascript can only execute a single line of code at a time if no webapis etc are present. However, there is a timeout function that lets you choose when in the stack you want it to execute


2. The call stack executes a single line of code at a time and stacks on top of 

3. The event loop runs when the call stack is ready. The order in which you are executing the functions and other lines of code. It get's added to the call stack the next step gets added to the que until the line before has been executed successfully.

4. If the call stack has things on it that it can't render it therefore blocks it/anything from happening – also slowing down your code. In order to speed it up is to fix what it can't render change the event order in the callstack.

