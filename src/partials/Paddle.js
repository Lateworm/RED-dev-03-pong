import {SVG_NS} from '../settings';

export default class Paddle {

  constructor(boardHeight, width, height, x, y, upKey, downKey) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
		this.score = 0;
		
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
	}

	coordinates(x, y, width, height) {
		let leftX = x;
		let rightX = x + width;
		let topY = y;
		let bottomY = y + height;
		return { leftX, rightX, topY, bottomY };
	}
	
	up () {
		this.y = Math.max(0, this.y-this.speed);
	}

	down () {
		this.y = Math.min(this.boardHeight-this.height, this.y+this.speed);
	}

	render(svg) {

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