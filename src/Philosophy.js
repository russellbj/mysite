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

            <div className="flex-container-header">
                <div className="row paddingBottom">
                   <div className="col-12" align="center">
                        <p className="header-title animate-pop-in hit-the-floor">Philosophy</p>
                        <h4 id="MusicMainText" className="header-subtitle animate-pop-in paddingBottom">
                        I have been passionate about continental philosophy for years -
                        my main subjects of interest include existentialism, personal ethics, 
                        the concept of the 'good life', Confucianism, and general metaphysics. Here you can find 
                        a collection of papers I have written.
                        </h4>
                    </div>
                </div>
                </div>

            <div className="col-12" align="center">
            <div className="row paddingTop" align="center">
                    <div className="col-12" align="center">
                    <h1 id="iframe-title" className="paddingBottom">Inner Story, Outer Story</h1>
                    <div className="subtitle-box">
                        <h4 id="iframe-body">
                        In my last semester at Beloit College, I took a class called Inner Story, Outer Story.
                        It covered social theorists such as Erving Goffman and
                        George Herbert Mead, and focused on the dichotomy between
                        the "outer stories" that people present to the world, and the "inner stories"
                        that we tell ourselves. My final essay (below) was about tech giants like Google and Microsoft. 
                        I attempted to reconcile the differences between their publicly professed standards and policies, 
                        and their less humanitarian underlying motives and actions. I also analyze 
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
                        One of the most prominent Pre-Socratic philosophers was a man named Parmenides.
                        He posited that plurality and change were illusions, and that the true nature of
                        reality was static, singular, and unchanging. When Aristotle wrote the <i>Physics</i>,
                        he grappled with this notion. In this essay, I outline how Aristotle was able to overcome
                        the Parmenidean problem.
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