import React, { Component } from 'react';
import Navbar from './Navbar.js';
import './Style.css';
import FooterBar from './FooterBar.js'

class Music extends Component {
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
                <div className='flex-container-header'>

                    <main id="MusicMainText">                
                    	<p className="header-title animate-pop-in hit-the-floor">Music</p>
                        	<h5 id="MusicMainText" className="insetshadow header-subtitle animate-pop-in music-subtitle">
                                Music has always played a central role in my life. Here you will find examples of the work I have done involving music and audio engineering. 
                            </h5>
                    </main>

                </div>
                
               <div className="container-fluid">
                <div className="row">
                <div className="col-12" align="center">
                    <h1 id="iframe-title">Production</h1>
                    <iframe className="flex-item-center" title="soundcloud" width="0%" height="0" scrolling="yes" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/16155674&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    <div className="subtitle-box">
                        <h4 id="iframe-body"> I am an avid hip-hop and electronic music fan, and have been interested in mixing/mastering for years.
                        Many of my friends are musicians, and I frequently help them balance and EQ their mixes after recording. 
                        I also have a soundcloud where I post many of the beats and instrumentals I have made.</h4>
                    </div>

                    <div className="svg-wrapper">
                        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height="40" width="150"></rect>
                        </svg><div id="btn-text">
                          <a href="https://soundcloud.com/beanwahn"><span className="spot"></span>See More</a>
                        </div>
                    </div>

                    <h1 id="iframe-title">Camp Createability</h1>
                    <iframe className="flex-item-center" title="youtube" src="https://www.youtube.com/embed/q39CssKPuGY" frameBorder="no" allow="autoplay; encrypted-media"></iframe> 
                    <div className="subtitle-box">
                        <h4 id="iframe-body"> In 2017, I volunteered at a summer camp for children with autism. We would assist the
                        kids in writing, directing, and producing short films. The program helped the kids learn filmmaking and editing
                        techniques, as well as interpersonal skills like cooperation and communication. In addition to IT and counselor duties, I created 
                        the music and did sound editing for our entry into a 48 Hour film competition. </h4>
                    </div>
               
                    <div className="svg-wrapper">
                        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height="40" width="150"></rect>
                        </svg><div id="btn-text">
                          <a href="https://campcreateability.org/"><span className="spot"></span>See More</a>
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

export default Music;