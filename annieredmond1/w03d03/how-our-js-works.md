Watch this AMAZING Video and Answer the Following Questions:

What is JavaScript work? ^o^

Um - I don't understand this question at all and didn't hear it on the video :)

What is the call stack? Why is it there?

It's a data structure which records where we are in the program. It's there because Javascript runs one thing at a time, so it keeps track of what's running.


What is the event loop? Why do we have it? Is it a part of the JavaScript language?

The event loop looks at the callstack and the queue and if the callstack is empty it pushes the first item from the queue into the callstack.  We have it because otherwise the browser would have to know when to push into the callstack and that would be chaotic.  I'm not sure if it's part of the language.


What is blocking? How can it slow down your code? How can avoiding it speed it up?

It's code that takes a while to run (like a while loop from 1 to 10 billion).  Because javascript can only run one function at a time, it slows down the code.  