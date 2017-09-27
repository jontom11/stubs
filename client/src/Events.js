import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

import EventPage from './EventPage';

class App extends Component {
  constructor() {
    super()
    this.state = {
      eventListing: [],
      maxQuantity: 0,
      minQuanitity: 0,
      totalListing: 0,
      totalTickets: 0
    };
}

componentWillMount() {
  let eventId = this.props.match.params.eventId
  console.log('eventId in componentWillMount', eventId)
  axios.post('/eventListing', {eventId: eventId})
//   .then(res => this.setState({eventListing: res.data}))
  .then(res => console.log(res.data))
  // .then(res => console.log('axios eventChange post request',res.data))}
}

  render() {
    return (
      <Router>
        <div className="App">
          Hey There!
          <EventPage />
        </div>
      </Router>
    );
  }
}

export default App;
