import React, {Component} from 'react';
import ParticleParametersLanding from './ParticleParametersLanding.js';
import Particles from 'react-particles-js';
import "./Style.css"

class LandingPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			subtitleFade: "header-subtitle animate-pop-in",
			titleFade: "header-title animate-pop-in",
			buttonFade: "header-button animate-pop-in",
			lineFade: "header-subtitle animate-pop-in hr-light",
			pageTransition: "pageTransitionIn"
		}
	}

  render() {
  	return(
  		<div>
  		<header id="LandingPage" className={this.state.pageTransition}>	
  			<section>
     				<h4 className={this.state.subtitleFade}>(Click The Screen)</h4>
    				<h1 className={this.state.titleFade}>Ben Russell</h1>
    				<hr className={this.state.lineFade}/>

						<div className={this.state.buttonFade}>
    					<div className="flex-container">
	    					<div>
	    					
	     					<button id="LandingPageButton" className="button" type="submit"
	     					onClick={() => this.onMusic()}>Music</button>
	     					<form action="/music"><button id="GoToMusic"></button></form>	     					      			
	    					</div>

	    					<div>	    					    					
	     					<button id="LandingPageButton" className="button" type="submit" onClick={() => this.onWebDev()}>Web Design</button>
	     					<form action="/webdesign"><button id="GoToWebDev"></button></form>
	    					</div>

	    					<div>	    					
	     					<button id="LandingPageButton" className="button" type="submit" onClick={() => this.onAppDev()}>Application Development</button>
	     					<form action="/appdev"><button id="GoToAppDev"></button></form>		     			
	    					</div>

	    					<div>
	    					<button id="LandingPageButton" className="button" type="submit" onClick={() => this.onPhilosophy()}>Philosophy</button>
	    					<form action="/philosophy"><button id="GoToPhil"></button></form>
	     					      			
	    					</div>
	    				</div>
    					</div>
    					</section>
    				<body>
	    				<div id="particles">
	     					<Particles id="particles" params={ParticleParametersLanding}/>
	     				</div>
    				</body>
    				</header>
  				</div>

  		)
	}

		fadeOut = () =>
		{
			this.setState({
			subtitleFade: "header-subtitle animate-fade-out",
			titleFade: "header-title animate-fade-out",
			buttonFade: "header-button animate-fade-out",
			lineFade: "header-subtitle animate-fade-out hr-light",
			pageTransition: "pageTransitionOut"
			});
		}

		onMusic = () =>
		{

		this.fadeOut();

			window.setTimeout(() => {
				document.getElementById('GoToMusic').click();
			}, 2000);
	}

		onWebDev = () =>
		{

		this.fadeOut();

			window.setTimeout(() => {
				document.getElementById('GoToWebDev').click();
			}, 2000);
	}

		onAppDev = () =>
		{

		this.fadeOut();

			window.setTimeout(() => {
				document.getElementById('GoToAppDev').click();
			}, 2000);
	}

		onPhilosophy = () =>
		{

		this.fadeOut();

			window.setTimeout(() => {
				document.getElementById('GoToPhil').click();
			}, 2000);
	}
}

export default LandingPage;