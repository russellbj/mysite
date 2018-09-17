import React, { Component } from 'react';
import Navbar from './Navbar.js';
import './Style.css';
import VacaWoodworks from './images/VacaWoodwork_smalls.jpg';
import DunnsMarsh from './images/DunnsMarsh_small.jpg';
import OED from './images/OED.jpg';
import JesseSite from './images/JesseSite_small.jpg'
import {CardImage} from 'mdbreact';
import FooterBar from './FooterBar.js'

class WebDesign extends Component {

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
                    <h1 id="iframe-title" className="paddingBottom">Vaca Woodworks</h1>
                    </div>
                </div>

                <div className="row" align="center">
                
                    
                    <a href="https://www.vacawoodworks.com/">
                    <CardImage src={VacaWoodworks} className="card-img-top" align="center" waves/>
                    </a>
                  
                    
                </div>

                <div className="row" align="center">
                    <div className="col-12">
                    <div className="subtitle-box">
                        <h4 id="iframe-body"> Website made to advertise my friend's woodworking business.
                        Built with MDBootstrap.</h4>
                    </div>

                    <div className="svg-wrapper">
                        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height="40" width="150"></rect>
                        </svg>
                        <div id="btn-text">
                          <a href="https://www.vacawoodworks.com/"><span className="spot"></span>Visit Site</a>
                        </div>
                    </div>
                    </div>

                </div>

                <div className="row paddingTop" align="center">
                    <div className="col-12" align="center">
                    <h1 id="iframe-title" className="paddingBottom">Dunn's Marsh</h1>
                    </div>
                </div>

                <div className="row" align="center">
               
                   
                    <a href="http://dunnsmarsh.org/">
                    <CardImage src={DunnsMarsh} className="card-img-top" align="center" waves/>
                    </a>
                   
                   
                </div>

                <div className="row" align="center">
                    <div className="col-12">
                    <div className="subtitle-box">
                        <h4 id="iframe-body"> I assisted a small team in designing and developing a website for the
                        Dunn's Marsh Neighborhood Association. Built with Wordpress. </h4>
                    </div>

                    <div className="svg-wrapper">
                        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height="40" width="150"></rect>
                        </svg>
                        <div id="btn-text">
                          <a href="http://dunnsmarsh.org/"><span className="spot"></span>Visit Site</a>
                        </div>
                    </div>
                    </div>
                    
                </div>

                <div className="row paddingTop" align="center">
                    <div className="col-12" align="center">
                    <h1 id="iframe-title" className="paddingBottom">Open Energy Dashboard</h1>
                    </div>
                </div>

                <div className="row" align="center">
                
                    
                    <a href="https://openenergydashboard.github.io/">
                    <CardImage src={OED} className="card-img-top" align="center" waves/>
                    </a>
                   
                    
                </div>

                <div className="row" align="center">
                    <div className="col-12">
                    <div className="subtitle-box">
                        <h4 id="iframe-body"> Worked with a team in my Database Capstone class to create a website
                        for our Open Energy Dashboard project. You can find more information about the
                        project in the Application Development tab. </h4>
                    </div>

                    <div className="svg-wrapper">
                        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height="40" width="150"></rect>
                        </svg>
                        <div id="btn-text">
                          <a href="https://openenergydashboard.github.io/"><span className="spot"></span>Visit Site</a>
                        </div>
                    </div>
                    </div>                  
                </div>

                <div className="row paddingTop" align="center">
                    <div className="col-12" align="center">
                    <h1 id="iframe-title" className="paddingBottom">Jesse Wiles Photography</h1>
                    </div>
                </div>

                <div className="row" align="center">
                
                    
                    <a href="https://github.com/russellbj/JesseWilesSite/">
                    <CardImage src={JesseSite} className="card-img-top" align="center" waves/>
                    </a>
              
                </div>

                <div className="row" align="center">
                    <div className="col-12">
                    <div className="subtitle-box">
                        <h4 id="iframe-body"> Currently building a portfolio site to host
                        my friend's photography. Still in progress, but you may download and run the project
                        from the github repository.</h4>
                    </div>

                    <div className="svg-wrapper">
                        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height="40" width="150"></rect>
                        </svg>
                        <div id="btn-text">
                          <a href="https://github.com/russellbj/JesseWilesSite/"><span className="spot"></span>Visit Repo</a>
                        </div>
                    </div>
                    </div>                  
                </div>
                </div>
                </body>
                <FooterBar />
        </div>
        </html>
        )
}
}

export default WebDesign;