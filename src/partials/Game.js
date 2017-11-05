import {SVG_NS, KEYS} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';


export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(element);
		this.boardGap = 10;
		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.ballRadius = 10;


		this.board = new Board(this.width, this.height);


		this.paddle1 = new Paddle(this.height, this.paddleWidth, this.paddleHeight,
			this.boardGap, (this.height-this.paddleHeight)/2, KEYS.p1up, KEYS.p1down);

		this.paddle2 = new Paddle(this.height, this.paddleWidth, this.paddleHeight,
			this.width-this.boardGap-this.paddleWidth, (this.height-this.paddleHeight)/2, KEYS.p2up, KEYS.p2down);

		this.ball01 = new Ball(this.ballRadius, this.width, this.height);
		// this.ball02 = new Ball(this.ballRadius, this.width, this.height);
		// this.ball03 = new Ball(this.ballRadius, this.width, this.height);
		// this.ball04 = new Ball(this.ballRadius, this.width, this.height);
		
		this.score1 = new Score((this.width/2)-30, 30, 30, 'p1');
		this.score2 = new Score((this.width/2)+30, 30, 30, 'p2');
		
		document.addEventListener('keydown', event => {
			if ( event.key === KEYS.spaceBar){
					this.pause = !this.pause
				}
		});

	}



	render() {

		if (this.pause) {return;}

		this.gameElement.innerHTML = '';
		
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewbox', `0 0 ${this.width} ${this.height}`);
		svg.setAttributeNS(null, 'version', '1.1');

		this.gameElement.appendChild(svg);

		this.board.render(svg);
		this.paddle1.render(svg);
		this.paddle2.render(svg);
		this.ball01.render(svg, this.paddle1, this.paddle2);
		this.score1.render(svg, this.paddle1.score);
		this.score2.render(svg, this.paddle2.score);
		// this.ball02.render(svg, this.paddle1, this.paddle2);
		// this.ball03.render(svg, this.paddle1, this.paddle2);
		// this.ball04.render(svg, this.paddle1, this.paddle2);

	}

}