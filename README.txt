SPEC W3110 Advanced Shitty Coding, Lab #1             (120 points total)
----------------------------------------------------------------------

Please read this assignment carefully and follow the instructions
EXACTLY.  

Submission:

  Please refer to the lab retrieval and submission instruction.
  The requirements regarding subdirectory for each part, README.txt and
  Makefiles remain the same as the previous labs.
  Please don't submit.

Checking memory errors with valgrind

  Do not include valgrind output in README.txt.  You should keep using
  valgrind to check your program for memory error (and the TAs will do
  the same when grading), but you don't have to include the output in
  README.txt anymore.


Part 0: Intro
-------------

Now that you have been working on migration for a semester, and have gained some familiarity to React, it's time to implement something that is not Spec related, because we all need a break from Spec work.

Your job is to code a multiplayer chess website, basically like lichess or sparkchess or any of the 100 other online chess websites out there—but much much worse.

I basically pulled this project out of my 🍑when I found out that Arsalaan wouldn't be here, so I apologize if this is all garbage that makes no sense expect you all to finish this lab in its entirety.

To get started, clone the repository with the starter code:

    $ git clone

After cloning the repository, you can install the dependencies with:

    $ 

The code could be run with:

    $ npm run start

As it stands, the code will not run. In Part 1, we will fix the glaring mistakes.



Part 1: Passing props and socket communication
----------------------------------------------

Now that you learned how to use sockets API, it's time to implement a
real mdb-lookup-server that does not rely on netcat tool. game using WebSockets.

In a traditional client-server models, a two player game like chess would consist of two clients which coordinate with a server in order to make moves or receive updates about the game. However, in our game of chess, we will be using one of the clients as a server. Look at the logic in makeSocket() function of socketSubscriber.js

In several files, there are TODO: Part 1 comments, followed by an issue which should not require knowledge of the larger project, and should only depend on an understanding of React.

Hints:

- How do props pass into children from parents?

- How do es6 modules get exported

- How should React components' constructors look?

Part 2: Uhhhhhh....
-------------------


Meeting's in 5 minutes, so I'll pull this out of my 🍑over the course of the meeting when people start getting past Part 1.
