import {SVG_NS} from '../settings';

export default class Paddle {

  constructor(boardHeight, width, height, x, y, upKey, downKey) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
		this.speed = 5;	// instead of setting speed, consider using a boolean of "whether to apply speed"
		this.score = 0;
		this.vy = 0;		// set the inital y-axis velocity of the paddle
		this.upInput = false;
		this.downInput = false;
		
		document.addEventListener('keydown', event => {
			switch(event.key) {
				case upKey:
					this.up();
					break;
				case downKey:
					this.down();
					break;
			}
		});

		document.addEventListener('keyup', event => {
			switch(event.key) {
				case upKey:
					this.upInput = false;
					break;
				case downKey:
					this.downInput = false;
					break;
			}
		});

	}

	coordinates(x, y, width, height) {
		let leftX = x;
		let rightX = x + width;
		let topY = y;
		let bottomY = y + height;
		return { leftX, rightX, topY, bottomY };
	}
	
	up () {
		// this.y = Math.max(0, this.y-this.speed);
		this.upInput = true;
	}

	down () {
		// this.y = Math.min(this.boardHeight-this.height, this.y+this.speed);
		this.downInput = true;
	}


	render(svg) {

		// try a keypress if statement in here
		if (this.upInput) {this.y = Math.max(0, this.y-this.speed)}
		if (this.downInput) {this.y = Math.min(this.boardHeight-this.height, this.y+this.speed)}

		let paddle = document.createElementNS(SVG_NS, 'rect');
		paddle.setAttributeNS(null, 'width', this.width);
		paddle.setAttributeNS(null, 'height', this.height);
		paddle.setAttributeNS(null, 'x', this.x);
		paddle.setAttributeNS(null, 'y', this.y);
		paddle.setAttributeNS(null, 'fill', '#aca');
		// paddle.setAttributeNS(null, 'rx', '4'); // round the corners of the paddle
		// paddle.setAttributeNS(null, 'ry', '4');

		svg.appendChild(paddle);

	}

}