import {SVG_NS, KEYS, GAMEVARS} from '../settings';
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
		this.paddleWidth = 4;
		this.paddleHeight = 56;
		this.ballRadius = 10;
		this.autopause = true;

		this.board = new Board(this.width, this.height);

		this.paddle1 = new Paddle(this.height, this.paddleWidth, this.paddleHeight,
			this.boardGap, (this.height-this.paddleHeight)/2, KEYS.p1up, KEYS.p1down);

		this.paddle2 = new Paddle(this.height, this.paddleWidth, this.paddleHeight,
			this.width-this.boardGap-this.paddleWidth, (this.height-this.paddleHeight)/2, KEYS.p2up, KEYS.p2down);

		this.ball01 = new Ball(this.ballRadius, this.width, this.height);
		// this.ball02 = new Ball(this.ballRadius, this.width, this.height);
		// this.ball03 = new Ball(this.ballRadius, this.width, this.height);
		// this.ball04 = new Ball(this.ballRadius, this.width, this.height);
		
		this.score1 = new Score('p1', KEYS.p1up, KEYS.p1down);
		this.score2 = new Score('p2', KEYS.p2up, KEYS.p2down);
		
		document.addEventListener('keydown', event => {
			if ( event.key === KEYS.spaceBar){
					this.pause = !this.pause
					this.autopause = false;
				}
		});

	}

	render() {

		if (!this.autopause && (this.paddle1.score >= GAMEVARS.winScore || this.paddle2.score >= GAMEVARS.winScore)) {
			this.paddle1.score = 0
			this.paddle2.score = 0
			this.paddle1.y = (this.height-this.paddleHeight)/2
			this.paddle2.y = (this.height-this.paddleHeight)/2
			document.getElementById('title').innerHTML = 'pong'
			document.getElementById('title').classList.remove('highlight');
			document.getElementById('pause').innerHTML = 'pause'
		}

		if (this.pause) {
			document.getElementById('pause').innerHTML = 'play?'
			document.getElementById('footer').classList.add('highlight');
			return;
		} else {
			document.getElementById('pause').innerHTML = 'pause'
			document.getElementById('footer').classList.remove('highlight');
		} 	

		if (this.autopause) {this.pause = true}

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
		this.score1.render(svg, this.paddle1.score);
		this.score2.render(svg, this.paddle2.score);

		this.ball01.render(svg, this.paddle1, this.paddle2);
		// this.ball02.render(svg, this.paddle1, this.paddle2);
		// this.ball03.render(svg, this.paddle1, this.paddle2);
		// this.ball04.render(svg, this.paddle1, this.paddle2);

		if (this.paddle1.score >= GAMEVARS.winScore || this.paddle2.score >= GAMEVARS.winScore) {
			this.autopause = true

			if (this.paddle1.score > this.paddle2.score) {
				document.getElementById('title').innerHTML = 'player 1 wins!'
			} else {
				document.getElementById('title').innerHTML = 'player 2 wins!'
			}

			document.getElementById('title').classList.add('highlight');
			return;
		}
	}

}