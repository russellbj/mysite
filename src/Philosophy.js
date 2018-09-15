import React, { Component } from 'react';
import Navbar from './Navbar.js';
import './Style.css';
import FooterBar from './FooterBar.js'

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

            <div className="col-12" align="center">
            <div className="row paddingTop" align="center">
                    <div className="col-12" align="center">
                    <h1 id="iframe-title" className="paddingBottom">Inner Story, Outer Story</h1>
                    <div className="subtitle-box">
                        <h4 id="iframe-body">
                        In the essay below, I explore
                        the cultural context surrounding the rise of tech-celebrity 
                        icons (Elon Musk, Bill Gates, etc.) through both a Western and Confucian lens. </h4>
                    </div>
                    </div>
            </div>
                    <iframe title="tech-paper" className="flex-item-center"src="https://docs.google.com/document/d/e/2PACX-1vSYg0w7YXZmFO90940METsCmyWmEZXIuaS1vziG8N_6ctOqEio2NEdtgmDmyXmCuYbmfRbmRuVmbOqm/pub?embedded=true"></iframe>
            </div>

            <div className="col-12" align="center">
            <div className="row paddingTop" align="center">
                    <div className="col-12" align="center">
                    <h1 id="iframe-title" className="paddingBottom">Becoming <i>Ren</i></h1>
                    <div className="subtitle-box">
                        <h4 id="iframe-body">
                        The highest virtue in Confucianism is captured
                        by the word <i>Ren</i>, which roughly translates to "humaneness", or 
                        "benevolence". In this essay, I analyze the meaning and function of the term,
                        and explore what constitutes a good life and a virtuous person under a 
                        Confucian framework.
                        </h4>
                    </div>
                    </div>
            </div>
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vTlF7w1E-RxbguOHrULg7ixOocPdgqU9_INnG5gXOB8na6Q8vVHlg-ffyeKQqyus_ZGGArTW_GFLomN/pub?embedded=true"></iframe>
            </div>

            <div className="col-12" align="center">
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
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vTNZvjog94mZb0e4_6Eq_C0krzX0teU0GC1T_40q9LF-ubjAstndS4DHxWbEdSQ1KLtF4zHpNWm-TQK/pub?embedded=true"></iframe>
            </div>

            <div className="col-12" align="center">
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
                    <iframe className= "flex-item-center" title="aristotle" src="https://docs.google.com/document/d/e/2PACX-1vSwsodMbiPOLw1X-NLRvnzArwzoAcXPux8nuZJr0bLdaJUKCWldMTJl6HqkMbT5jRn2lyhcdDG3XZiM/pub?embedded=true"></iframe>
            </div>
        </body>
        <FooterBar />
    </div>
    </html>
    )}}

    export default Philosophy;