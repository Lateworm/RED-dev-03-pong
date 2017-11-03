import {SVG_NS} from '../settings';

export default class Ball {

  constructor(x, y, radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
		this.direction = 1;
		this.x = x;
		this.y = y;
	}
	
	render(svg) {

		let ball = document.createElementNS(SVG_NS, 'circle');
		ball.setAttributeNS(null, 'cx', this.x );
		ball.setAttributeNS(null, 'cy', this.y );
		ball.setAttributeNS(null, 'r', '8');
		ball.setAttributeNS(null, 'fill', '#fff');

		svg.appendChild(ball);

	}

}