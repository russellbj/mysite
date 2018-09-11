import React, { Component } from 'react';
import { Navbar, NavbarNav, NavbarToggler, Collapse} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './images/br_logo.jpg'
import 'react-awesome-button/dist/styles.css';

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false,
        };

        this.onHome = this.onHome.bind(this);
        this.onMusic = this.onMusic.bind(this);
        this.onWebDev = this.onWebDev.bind(this);
        this.onAppDev = this.onAppDev.bind(this);
        this.onPhil = this.onPhil.bind(this);
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    onHome()
    {
            this.props.navAction();

            window.setTimeout(() => {
                document.getElementById('GoToHome').click();
            }, 1000);
    }

    onMusic()
        {
            this.props.navAction();

            window.setTimeout(() => {
                document.getElementById('GoToMusic').click();
            }, 1000);
        }
    onWebDev()
        {
            this.props.navAction();

            window.setTimeout(() => {
                document.getElementById('GoToWebDev').click();
            }, 1000);
        }
    onAppDev()
        {
            this.props.navAction();

            window.setTimeout(() => {
                document.getElementById('GoToAppDev').click();
            }, 1000);
        }
    onPhil()
        {
            this.props.navAction();

            window.setTimeout(() => {
                document.getElementById('GoToPhil').click();
            }, 1000);
        }

    render() {
        return (
            <Router >
                <Navbar id="Navbar" dark expand="md" scrolling>
                    <NavbarNav left href="/">
                    <a onClick={this.onHome}>
                        <form action="/"><button id="GoToHome"></button></form>
                        <img src= {logo} id='logo' alt="click for homepage"/>
                    </a>

                    </NavbarNav>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>

                        <NavbarNav>
                          <a id="button" className="navButton" onClick={this.onMusic}>Music</a>
                            <form action="/music"><button id="GoToMusic"></button></form>
                          <a id="button" className="navButton" onClick={this.onWebDev}>Web Design</a>
                            <form action="/webdesign"><button id="GoToWebDev"></button></form>
                          <a id="button" className="navButton" onClick={this.onAppDev}>App Dev</a>
                            <form action="/appdev"><button id="GoToAppDev"></button></form>
                          <a id="button" className="navButton" onClick={this.onPhil}>Philosophy</a>
                            <form action="/philosophy"><button id="GoToPhil"></button></form>
                        </NavbarNav>

                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default NavbarComponent;