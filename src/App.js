import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import LandingPage from './LandingPage.js';
import Music from "./Music.js"
import Philosophy from './Philosophy.js'
import WebDesign from './WebDesign.js';
import ApplicationDevelopment from './ApplicationDevelopment.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
           <div>
            
            
         		<Route exact path="/" component={LandingPage} />
            <Route exact path='/music' component={Music} />
            <Route exact path='/philosophy' component={Philosophy} />
            <Route exact path='/webdesign' component={WebDesign} />
            <Route exact path='/appdev' component={ApplicationDevelopment} /> 

           </div>
    </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
