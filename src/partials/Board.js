import {SVG_NS} from '../settings';

export default class Board {

	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	render(svg) {
		let board = document.createElementNS(SVG_NS, 'rect');
		board.setAttributeNS(null, 'width', this.width);
		board.setAttributeNS(null, 'height', this.height);
		board.setAttributeNS(null, 'fill', '#522');

		let net = document.createElementNS(SVG_NS, 'line')
		net.setAttributeNS(null, 'x1', this.width/2)
		net.setAttributeNS(null, 'y1', 0)
		net.setAttributeNS(null, 'x2', this.width/2)
		net.setAttributeNS(null, 'y2', this.height)
		net.setAttributeNS(null, 'stroke', '#a66')
		net.setAttributeNS(null, 'stroke-opacity', '0.5')
		net.setAttributeNS(null, 'stroke-width', '4')

		svg.appendChild(board);
		svg.appendChild(net);
	}

}