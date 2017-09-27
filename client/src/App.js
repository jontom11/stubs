import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import EventPage from './EventPage';
import FrontPage from './FrontPage';
import Events from './Events';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/:eventId' component={Events} />
           <Route exact path='/' component={FrontPage} />
        </div>
      </Router>
    );
  }
}

export default App;
