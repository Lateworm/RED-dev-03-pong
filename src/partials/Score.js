import {SVG_NS} from '../settings';

export default class Score {

  constructor(x, y, size, id) {
    this.x = x;
    this.y = y;
		this.size = size;
		this.id = id;
  }
	
	render(svg, score) {
		let text = document.createElementNS(SVG_NS, 'text');
		text.setAttributeNS(null, 'x', this.x);
		text.setAttributeNS(null, 'y', this.y);
		text.setAttributeNS(null, 'font-size', this.size);	
		text.setAttributeNS(null, 'fill', '#fff');
		text.setAttributeNS(null, 'font-family', '\'Silkscreen Web\', monotype');
		text.innerHTML = score;

		svg.appendChild(text);


		document.getElementById(this.id).innerHTML = score;  // needs to be this.something.... player?


	}
}