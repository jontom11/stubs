// NOT YET READY! No Route. Imports are not done. View Must change on Route. 

import React, { Component } from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import TableView from './TableView';

class FrontPage extends Component {
  constructor() {
    super();
    this.state = {
      users:[],
      data: [],
      ticketInfo: [],
      eventListing: [],
      eventName: '',
      eventLocation: '',
      eventRadius: ''
    };
   
    this.eventNameChangeHandler = this.eventNameChangeHandler.bind(this);
    this.eventLocationChangeHandler = this.eventLocationChangeHandler.bind(this);
    this.eventRadiusChangeHandler = this.eventRadiusChangeHandler.bind(this);
    this.clickButtonHandler = this.clickButtonHandler.bind(this);
  }

  componentDidMount() {
    axios.get('/users')
    .then(users => this.setState({ users: users.data }));
  }

  eventNameChangeHandler(e) {
    this.setState({eventName: e.target.value})
  }

  eventLocationChangeHandler(e) {
    this.setState({eventLocation: e.target.value})
  }

  eventRadiusChangeHandler(e) {
    this.setState({eventRadius: e.target.value})
  }

  clickButtonHandler() {
    axios.post('/api', {eventName: this.state.eventName, eventLocation: this.state.eventLocation, eventRadius: this.state.eventRadius})
    .then(res => this.setState({ data: res.data.events })) 
    
    axios.post('/ticketInfo', {eventName: this.state.eventName, eventLocation: this.state.eventLocation, eventRadius: this.state.eventRadius})
//     .then(res => console.log('ticketInfo FrontPage api response', res.data.events))
    .then(res => this.setState({ ticketInfo: res.data.events }))

//     axios.post('/eventListing', {eventName: this.state.eventListing})
//     .then(res => this.setState({eventListing: res.data}))
//     // .then(res => console.log('axios eventChange post request',res.data))
  }

  render() {
    return(
      <div className="FrontPage">
          <div className="FrontPage-Header">
            <h2>Front Page of Stubs</h2>
            <div><TextField className='textField' hintText="Hint Text" floatingLabelText="Event Name" onChange={this.eventNameChangeHandler}/></div>
            <div><TextField className='textField' hintText="Hint Text" floatingLabelText="Location" onChange={this.eventLocationChangeHandler}/>
              <TextField className='textField' hintText="Hint Text" floatingLabelText="Radius" onChange={this.eventRadiusChangeHandler}/></div>
            <div><TextField hintText="Hint Text" floatingLabelText="Price"/></div>
            <RaisedButton label="Search" primary={true} onClick={this.clickButtonHandler}/>
          </div>
          <TableView data={{tableData: this.state.data, listingData: this.state.eventListing, ticketInfo: this.state.ticketInfo}} />
        </div>
    )
  }
}

export default FrontPage;




