import React, { Component } from 'react';
import Navbar from './Navbar.js';
import './Style.css';
import {CardImage} from 'mdbreact';
import demo_oed from './images/demo_oed_small.jpg';
import robofriends from './images/robofriends_small.jpg'
import smart_brain from './images/smart_brain_small.jpg'
import zombies from './images/zombies_small.jpg'
import FooterBar from './FooterBar.js'

class ApplicationDevelopment extends Component {

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
                    <h1 id="iframe-title" className="paddingBottom">Open Energy Dashboard</h1>
                    </div>
                </div>

                <div className="row" align="center">
              
                
                    <a href="http://oed.beloit.edu:3020/">
                    <CardImage src={demo_oed} className="card-img-top" align="center" waves/>
                    </a>
                   
              
                </div>

                <div className="row" align="center">
                    <div className="col-12">
                    <div className="subtitle-box">
                        <h4 id="iframe-body"> <i> Built with D3.js and Postgres. </i> Contributed to a free and open source energy monitoring 
                        dashboard developed by my Database Capstone class. The goal was to create an 
                        intuitive and dynamic interface for monitoring energy usage on campus. 
                        The team is currently pursuing collaborations with other institutions. 
                        I primarily assisted in front-end interface design and integrating meter 
                        data into our Postgres server.  </h4>
                    </div>

                    <div className="svg-wrapper">
                        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height="40" width="150"></rect>
                        </svg>
                        <div id="btn-text">
                          <a href="http://oed.beloit.edu:3020/"><span className="spot"></span>Test Demo</a>
                        </div>
                    </div>
                    </div>

                </div>
                

                <div className="row paddingTop" align="center">
                    <div className="col-12" align="center">
                    <h1 id="iframe-title" className="paddingBottom paddingTop">Robofriends</h1>
                    </div>
                </div>

                <div className="row" align="center">
                
                   
                    <a href="https://russellbj.github.io/RoboFriendsPWA/">
                    <CardImage src={robofriends} className="card-img-top" align="center" waves/>
                    </a>
                    
              
                </div>

                <div className="row" align="center">
                    <div className="col-12">
                    <div className="subtitle-box">
                        <h4 id="iframe-body"> <i> Built with React, Redux, and RoboHash (<a> https://robohash.org/ </a>) 
                        </i>. Following a Udemy tutorial, I wrote
                        a small app that takes in JSON data and uses it to generate a card-based
                        list of users. I have since used the app as a sandbox to practice and learn more about TypeScript, Progressive
                        Web App functionality, and Jest unit tests. </h4>
                    </div>

                    <div className="svg-wrapper">
                        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height="40" width="150"></rect>
                        </svg>
                        <div id="btn-text">
                          <a href="https://russellbj.github.io/RoboFriendsPWA/"><span className="spot"></span>Test Demo</a>
                        </div>
                    </div>
                    </div>

                </div>
                
                <div className="row paddingTop" align="center">
                    <div className="col-12" align="center">
                    <h1 id="iframe-title" className="paddingBottom paddingTop">SmartBrain</h1>
                    </div>
                </div>

                <div className="row" align="center">
           
                    <CardImage src={smart_brain} className="card-img-top" align="center" waves/>
 
                </div>

                <div className="row" align="center">
                    <div className="col-12">
                    <div className="subtitle-box">
                        <h4 id="iframe-body"> 
                        <i> Built with React, Redux, Postgres, and 
                        Clairifi (<a>https://clarifai.com/</a>). Currently working on implementing Docker containerization. </i>
                        I worked on an application that detects faces in images, and draws a box around each face
                        it detects. The app also uses a Postgres database to store a hashed table of user login
                        information. Built with help from the same React+Redux Udemy course as is listed above.
                        </h4>
                    </div>

                    <div className="svg-wrapper">
                        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height="40" width="150"></rect>
                        </svg>
                        <div id="btn-text-small">
                          <a href="https://github.com/russellbj/smart-brain-api"><span className="spot"></span>Backend Repo</a>
                        </div>
                    </div>
                    <div className="svg-wrapper">
                        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height="40" width="150"></rect>
                        </svg>
                        <div id="btn-text-small">
                          <a href="https://github.com/russellbj/smart-brain"><span className="spot"></span>Frontend Repo</a>
                        </div>
                    </div>
                    </div>

                </div>

                <div className="row paddingTop" align="center">
                    <div className="col-12" align="center">
                    <h1 id="iframe-title" className="paddingBottom paddingTop">Games</h1>
                    </div>
                </div>

                <div className="row" align="center">
               
                    <a href="https://github.com/russellbj">
                    <CardImage src={zombies} className="card-img-top" align="center" waves/>
                    </a>
                    
                </div>

                <div className="row" align="center">
                    <div className="col-12">
                    <div className="subtitle-box">
                        <h4 id="iframe-body"> I am developing a number of games in Unity,
                        including a top-down shooter, a side-scroller, and an isometric 3D RPG.
                        Though they are still in development, you can check out the code 
                        on my GitHub.
                        </h4>
                    </div>

                    <div className="svg-wrapper">
                        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height="40" width="150"></rect>
                        </svg>
                        <div id="btn-text-small">
                          <a href="https://github.com/russellbj"><span className="spot"></span>Visit Github</a>
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

export default ApplicationDevelopment;