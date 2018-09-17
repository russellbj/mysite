import React, { Component } from 'react';
import Navbar from './Navbar.js';
import './Style.css';
import FooterBar from './FooterBar.js'
import inner_story from './images/inner_story.jpg'
import camus from './images/camus.jpg'
import aristotle from './images/aristotle.jpg'
import {CardImage} from 'mdbreact';
import EssayOnePDF from './EssayOne.pdf'
import EssayTwoPDF from './EssayTwo.pdf'
import EssayThreePDF from './EssayThree.pdf'

class Philosophy extends Component {
    constructor(props) {
        super(props);

        this.navHandler = this.navHandler.bind(this);

        this.state = {
            pageTransition: "pageTransitionIn"
        }
    }


    navHandler = () => {
        this.setState({pageTransition: "pageTransitionOut"});
    }

  render() {
    return (
    <html className={this.state.pageTransition}>
    <div>
        <header>
                <Navbar navAction = {this.navHandler}/>
        </header>
        <body id="MusicBody">
         <div className="container-fluid">
            <div className="row paddingTop" align="center">
                    <div className="col-12" align="center">
                    <h1 id="iframe-title" className="paddingBottom">Inner Story, Outer Story</h1>
                    <div className="subtitle-box">
                        <h4 id="iframe-body">
                        In the essay below, I explore
                        the cultural context surrounding the rise of tech-celebrity 
                        icons (Elon Musk, Bill Gates, etc.) through both a Western and Confucian lens. 
                        </h4>
                    </div>
                    </div>
            </div> 

            <div className="row" align="center">
            <a href={EssayOnePDF} download>
                <CardImage src={inner_story} className="card-img-top" align="center" waves/>
            </a>
            </div>
            <div className="row paddingTop" align="center">
            <div className="svg-wrapper">
                        <svg height="40" width="150" className="slight-push-right" xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height="40" width="150"></rect>
                        </svg>
                        <div id="btn-text">
                          <a href={EssayOnePDF} download><span className="spot"></span>Download PDF</a>
                        </div>
            </div>
            </div>

            <div className="row paddingTop" align="center">
                    <div className="col-12" align="center">
                    <h1 id="iframe-title" className="paddingBottom">Camus, Suicide, and the Absurd</h1>
                    <div className="subtitle-box">
                        <h4 id="iframe-body">
                        I greatly appreciate any philosopher that attempts to combat the
                        tide of nihilism. This is why for my philosophy colloquium class I wrote
                        on Camus and the <i>Myth of Sisyphus</i>, wherein Camus makes a passionate case for
                        the value of life.
                        </h4>
                    </div>
                    </div>
            </div> 

            <div className="row" align="center">
            <a href={EssayTwoPDF} download>
                <CardImage src={camus} className="card-img-top" align="center" waves/>
            </a>
            </div>

            <div className="row paddingTop" align="center">
            <div className="svg-wrapper">
                        <svg height="40" width="150" className="slight-push-right" xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height="40" width="150"></rect>
                        </svg>
                        <div id="btn-text">
                          <a href={EssayTwoPDF} download><span className="spot"></span>Download PDF</a>
                        </div>
            </div>
            </div>

            <div className="row paddingTop" align="center">
                    <div className="col-12" align="center">
                    <h1 id="iframe-title" className="paddingBottom">Parmenides vs. Aristotle</h1>
                    <div className="subtitle-box">
                        <h4 id="iframe-body">
                        In this essay, I outline how Aristotle overcame
                        Parmenidean ontology.
                        </h4>
                    </div>
                    </div>
            </div> 

            <div className="row" align="center">
            <a href={EssayThreePDF} download>
                <CardImage src={aristotle} className="card-img-top" align="center" waves/>
            </a>
            </div>
            <div className="row paddingTop" align="center">
            <div className="svg-wrapper">
                        <svg height="40" width="150" className="slight-push-right" xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height="40" width="150"></rect>
                        </svg>
                        <div id="btn-text">
                          <a href={EssayThreePDF} download><span className="spot"></span>Download PDF</a>
                        </div>
            </div>
            </div>
            </div>
        </body>
        <FooterBar />
    </div>
    </html>
    )}}

    export default Philosophy;