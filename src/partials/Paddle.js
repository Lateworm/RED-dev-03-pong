import {SVG_NS} from '../settings';

export default class Paddle {

  constructor(boardHeight, width, height, x, y, upKey, downKey) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
		this.speed = 5;
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
		this.upInput = true;
		this.y = Math.max(0, this.y-this.speed);
	}

	down () {
		this.downInput = true;
		this.y = Math.min(this.boardHeight-this.height, this.y+this.speed)
	}

	render(svg) {
		if (this.upInput) this.up();
		if (this.downInput) {}

		let paddle = document.createElementNS(SVG_NS, 'rect');
		paddle.setAttributeNS(null, 'width', this.width);
		paddle.setAttributeNS(null, 'height', this.height);
		paddle.setAttributeNS(null, 'x', this.x);
		paddle.setAttributeNS(null, 'y', this.y);
		paddle.setAttributeNS(null, 'fill', '#fff');

		svg.appendChild(paddle);

	}

}