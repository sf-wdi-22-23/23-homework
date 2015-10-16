// JavaScript work
how the javascript code is processed

// call stack
the order in which the console queues events in a block of code

// event loop
pushes events to call stack if it is clear, then performs the callback

// blocking
with blocking, an event must run to completion before moving on to another event.
when a request is made, the event loop is held up until a response returns.
this can slow down code since one held up process can prevent other processes from occuring.
without blocking, you can queue multiple events simultaneously but this can flood the call stack