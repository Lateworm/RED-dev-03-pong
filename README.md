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

- Implemented smoother movement of the paddles, making the game much easier to play.
- Modified the ball's reset function to prevent it from launching the ball at unplayable near-vertical vectors.
- Write the score to HTML outside the play area
- Write the player's controls to the screen.

## Outstanding Stretch Goals

- Run gameplay only when the window/tab has focus.
- Make the first serve to a random player instead of always to player 2.
- Change how the ball is spawned to create more playable vectors.
- If the ball's cy is within its radius past the end of the paddle, send it off at a crazy angle.
- Add a set of 'mutators' that can be applied
	- ball spped
	- ball size
	- ball opacity or color
	- paddle size
	- paddle speed
	- board size
	- paddle opacity or color
	- paddle distance from net
	- number of balls?
- Implement some method of applying mutators
	- players spend points from their score to apply mutators?
