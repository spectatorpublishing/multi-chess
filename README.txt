SPEC W3110 Advanced Shitty Coding, Lab #1             (120 points total)
----------------------------------------------------------------------

Please read this assignment carefully and follow the instructions
EXACTLY.  

Submission:

P̶l̶e̶a̶s̶e̶ ̶r̶e̶f̶e̶r̶ ̶t̶o̶ ̶t̶h̶e̶ ̶l̶a̶b̶ ̶r̶e̶t̶r̶i̶e̶v̶a̶l̶ ̶a̶n̶d̶ ̶s̶u̶b̶m̶i̶s̶s̶i̶o̶n̶ ̶i̶n̶s̶t̶r̶u̶c̶t̶i̶o̶n̶.̶
̶ ̶ ̶T̶h̶e̶ ̶r̶e̶q̶u̶i̶r̶e̶m̶e̶n̶t̶s̶ ̶r̶e̶g̶a̶r̶d̶i̶n̶g̶ ̶s̶u̶b̶d̶i̶r̶e̶c̶t̶o̶r̶y̶ ̶f̶o̶r̶ ̶e̶a̶c̶h̶ ̶p̶a̶r̶t̶,̶ ̶R̶E̶A̶D̶M̶E̶.̶t̶x̶t̶ ̶a̶n̶d̶
̶ ̶ ̶M̶a̶k̶e̶f̶i̶l̶e̶s̶ ̶r̶e̶m̶a̶i̶n̶ ̶t̶h̶e̶ ̶s̶a̶m̶e̶ ̶a̶s̶ ̶t̶h̶e̶ ̶p̶r̶e̶v̶i̶o̶u̶s̶ ̶l̶a̶b̶s̶.̶
̶. Please don't submit.

C̶h̶e̶c̶k̶i̶n̶g̶ ̶m̶e̶m̶o̶r̶y̶ ̶e̶r̶r̶o̶r̶s̶ ̶w̶i̶t̶h̶ ̶v̶a̶l̶g̶r̶i̶n̶d̶
̶
̶ ̶ ̶D̶o̶ ̶n̶o̶t̶ ̶i̶n̶c̶l̶u̶d̶e̶ ̶v̶a̶l̶g̶r̶i̶n̶d̶ ̶o̶u̶t̶p̶u̶t̶ ̶i̶n̶ ̶R̶E̶A̶D̶M̶E̶.̶t̶x̶t̶.̶ ̶ ̶Y̶o̶u̶ ̶s̶h̶o̶u̶l̶d̶ ̶k̶e̶e̶p̶ ̶u̶s̶i̶n̶g̶
̶ ̶ ̶v̶a̶l̶g̶r̶i̶n̶d̶ ̶t̶o̶ ̶c̶h̶e̶c̶k̶ ̶y̶o̶u̶r̶ ̶p̶r̶o̶g̶r̶a̶m̶ ̶f̶o̶r̶ ̶m̶e̶m̶o̶r̶y̶ ̶e̶r̶r̶o̶r̶ ̶(̶a̶n̶d̶ ̶t̶h̶e̶ ̶T̶A̶s̶ ̶w̶i̶l̶l̶ ̶d̶o̶
̶ ̶ ̶t̶h̶e̶ ̶s̶a̶m̶e̶ ̶w̶h̶e̶n̶ ̶g̶r̶a̶d̶i̶n̶g̶)̶,̶ ̶b̶u̶t̶ ̶y̶o̶u̶ ̶d̶o̶n̶'̶t̶ ̶h̶a̶v̶e̶ ̶t̶o̶ ̶i̶n̶c̶l̶u̶d̶e̶ ̶t̶h̶e̶ ̶o̶u̶t̶p̶u̶t̶ ̶i̶n̶
̶ ̶ ̶R̶E̶A̶D̶M̶E̶.̶t̶x̶t̶ ̶a̶n̶y̶m̶o̶r̶e̶.̶
̶


Part 0: Intro
-------------

Now that you have been working on migration for a semester, and have gained some familiarity to React, it's time to implement something that is not Spec related, because we all need a break from Spec work.

Your job is to code a multiplayer chess website, basically like lichess or sparkchess or any of the 100 other online chess websites out there—but much much worse.

I basically pulled this project out of my 🍑when I found out that Arsalaan wouldn't be here, so I a̶p̶o̶l̶o̶g̶i̶z̶e̶ ̶i̶f̶ ̶t̶h̶i̶s̶ ̶i̶s̶ ̶a̶l̶l̶ ̶g̶a̶r̶b̶a̶g̶e̶ ̶t̶h̶a̶t̶ ̶m̶a̶k̶e̶s̶ ̶n̶o̶ ̶s̶e̶n̶s̶e̶ expect you all to finish this lab in its entirety.

To get started, clone the repository with the starter code:

    $ git clone https://github.com/spectatorpublishing/multi-chess.git

After cloning the repository, you can install the dependencies with:

    $ npm install

The code could be run with:

    $ npm run start

As it stands, the code will not run. In Part 1, we will fix the glaring mistakes.



Part 1: Passing props and socket communication
----------------------------------------------

Now that you learned how to use sockets API, it's time to implement a
real m̶d̶b̶-̶l̶o̶o̶k̶u̶p̶-̶s̶e̶r̶v̶e̶r̶ ̶t̶h̶a̶t̶ ̶d̶o̶e̶s̶ ̶n̶o̶t̶ ̶r̶e̶l̶y̶ ̶o̶n̶ ̶n̶e̶t̶c̶a̶t̶ ̶t̶o̶o̶l̶ game using WebSockets.

In a traditional client-server models, a two player game like chess would consist of two clients which coordinate with a server in order to make moves or receive updates about the game. However, in our game of chess, we will be using one of the clients as a server. Look at the logic in makeSocket() function of socketSubscriber.js

In several files, there are TODO: Part 1 comments, followed by an issue which should not require knowledge of the larger project, and should only depend on an understanding of React.

Hints:

- How do props pass into children from parents?

- How do es6 modules get exported

- How should React components' constructors look?

Part 2: Uhhhhhh....
-------------------


Meeting's in 5 minutes, so I'll pull this out of my 🍑over the course of the meeting when people start getting past Part 1.
