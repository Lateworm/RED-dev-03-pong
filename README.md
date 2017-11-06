# Pong Game

A basic pong game using SVGs.

## Setup

**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

## Stretch Goals Acheived

- Pause the game on page load, so the players can initiate play when ready.
- Display a notification whenever the game is paused.
- Implement smoother movement of the paddles, making the game much easier to play.
- Modify the ball's reset function so it won't launch the ball at unplayable near-vertical vectors or in such a way that it can be returned without moving the paddle.
- Increase the speed of the ball with each paddle hit.
- Write the players' score and controls to HTML outside the play area using a template literal in Score.js
- End the game and declare a winner when a player earns 10 points.


## Outstanding dev tasks

- Create final production build
- Establish consistency of indentation and semicolon usage
- Troubleshoot slow gameplay in Opera. Perhaps Opera operates at a slower framerate.
- Troubleshoot sound in Safari. It does not play the sound.

## Outstanding Stretch Goals

- Refactor stretch goal code to acheive dryness
- Make the first serve to a random player instead of always to player 2.
- Run gameplay only when the window/tab has focus.
- If the ball's cy is within its radius past the end of the paddle, send it off at a crazy angle.
- Find the size of the browser window and maximize the gameplay size accordingly

