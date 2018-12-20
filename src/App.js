import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import NavigationTabs from './components/NavigationTabs';
import Home from "./components/Nav/Home";
import About from "./components/Nav/About";
import Project from "./components/Nav/Project";
import Contact from "./components/Nav/Contact";
import Signin from './components/Nav/Signin';

// // import ControlledCarousel from './components/Carousel';
// import AuthenticatedRoute from './components/AuthenticatedRoute';
// import UnauthenticatedRoute from './components/UnauthenticatedRoute'


class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Router>
          <div>

                    
              <div>
                  <NavigationTabs />
                  {/* <ControlledCarousel/> */}

            <Link to="/about"></Link>
            <Link to="/project"></Link>
            <Link to="/contact"></Link>
                  <Route path="/" component={Home} />
                  <Route  path="/about" component={About} />
                  <Route  path="/project" component={Project} />
                  <Route  path="/contact" component={Contact} />
                  <Route  path="/signin" component={Signin} />
              </div>
              </div>
        </Router>
        
        
      </div>
    );
  }
}

export default App;
