import {SVG_NS} from '../settings';

export default class Ball {

  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
		this.direction = 1;
		this.ping = new Audio('public/sounds/pong-01.wav');
		this.reset();
	}

	reset() {
		this.x = this.boardWidth / 2;
		this.y = this.boardHeight / 2;
		this.vy = 0;
		while (this.vy === 0 ) {
			// this.vy = Math.floor(Math.random() * 10 - 5);			// set initial y velocity
			this.vy = Math.floor(Math.random() * 4 - 2);
		}
		this.vx = this.direction * (6 - Math.abs(this.vy));	// set initial x velocity
	}

	wallCollision(paddle1, paddle2) {
		const hitLeft = this.x - this.radius <= 0;
		const hitRight = this.x + this.radius >= this.boardWidth;
		const hitTop = this.y - this.radius <= 0;
		const hitBottom = this.y + this.radius >= this.boardHeight;

		if (hitLeft) {
			this.direction = -1;
			this.goal(paddle2);
		} else if (hitRight) {
			this.direction = 1;
			this.goal(paddle1);
		} else if ( hitTop || hitBottom ) {
			this.vy = -this.vy;
		}
	}

	paddleCollision(paddle1, paddle2) {
		if (this.vx > 0) {
			//detect collision on right side (p2)
			let paddle = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
			let { leftX, topY, bottomY } = paddle; // array destructuring

			if (
				this.x + this.radius >= leftX	// right edge of ball >= left edge of paddle
				&& this.y >= topY   					// ball Y is >= paddle topY
				&& this.y <= bottomY					// ball Y is <= paddle bottomY
			) {
				this.vx *= -1.03;
				this.vy *= 1.02;
				this.ping.play();
			}

		} else {
			// detect collisions on left side (p1)
			let paddle = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
			let { rightX, topY, bottomY } = paddle; // array destructuring

			if (
				this.x - this.radius <= rightX	// right edge of ball >= left edge of paddle
				&& this.y >= topY   					// ball Y is >= paddle topY
				&& this.y <= bottomY					// ball Y is <= paddle bottomY
			) {
				this.vx *= -1.03;
				this.vy *= 1.02;
				this.ping.play();
			}
		}
	}

	goal(player) {
		player.score ++;
		this.reset();
	}
	
	render(svg, paddle1, paddle2) {
		this.y += this.vy;	// y position = y position + y velocity
		this.x += this.vx;	// y position = x position + x velocity
		this.wallCollision(paddle1, paddle2);
		this.paddleCollision(paddle1, paddle2);

		let ball = document.createElementNS(SVG_NS, 'circle');
		ball.setAttributeNS(null, 'cx', this.x );
		ball.setAttributeNS(null, 'cy', this.y );
		ball.setAttributeNS(null, 'r', '8');
		ball.setAttributeNS(null, 'fill', '#fff');

		svg.appendChild(ball);
	}

}