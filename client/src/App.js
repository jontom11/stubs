import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import TableView from './TableView';


class App extends Component {
  constructor() {
    super();
    this.state = {
      users:[],
      data: []
    };
    
    this.clickButtonHandler = this.clickButtonHandler.bind(this);
  }

  componentDidMount() {
    axios.get('/users')
    .then(users => this.setState({ users: users.data }));
  }

  clickButtonHandler() {
    axios.get('/api')
    .then(res => this.setState({ data: res.data.events }))    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <div><TextField hintText="Hint Text" floatingLabelText="Event Name"/></div>
          <div><TextField hintText="Hint Text" floatingLabelText="Event Name"/></div>
          <div><TextField hintText="Hint Text" floatingLabelText="Event Name"/></div>
          <RaisedButton label="Search" primary={true} onClick={this.clickButtonHandler}/>
        </div>
        <div>
          <h1>Users</h1>
          {this.state.users.map(user=> 
            <div key={user.id}>{user.username}</div>
          )}
        </div>
        <TableView tableData={this.state.data}/>
        <div id='eventList'>
          {this.state.data.map(event => 
            <div key={event.id}>{event.id+ ' ' + event.name}</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
