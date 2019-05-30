import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "../Home";
import Stuff from "../Works";
import Contacts from "../Contacts";



class Toolbar extends Component {
  render() {
    return (
    	<HashRouter>
        <div>
          <ul className="header">
            <li className="brand"><NavLink to="./Home">Home</NavLink></li>
            <li><NavLink to="./Works">Works</NavLink></li>
            <li><NavLink to="./Contacts">Contacts</NavLink></li>
          </ul>
          <div className="content">

          	<Route exact path="/" component={Home}/>
            <Route path="/Works" component={Stuff}/>
            <Route path="/Contacts" component={Contacts}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}


export  default  Toolbar;