// import {SVG_NS} from '../settings';

export default class Score {

  constructor(id, upKey, downKey) {
		this.id = id;
		this.upKey = upKey;
		this.downKey = downKey;
  }
	
	render(svg, score) {

		document.getElementById(this.id).innerHTML = `
		<h2>${this.id}</h2>
		<p>score</p>
		<p class="score">${score}</p>
		<p>controls</p>
		<p>

			<div class="controls">
					${this.upKey}
			</div>

			<div class="controls">
					${this.downKey}
			</div>
			
		</p>
		`
	}
}