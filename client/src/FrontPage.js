// NOT YET READY! No Route. Imports are not done. View Must change on Route. 

import React, {Component} from 'react';
import TableView from './TableView'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class FrontPage extends Component {

  render() {
    return(
      <div className="App-header">
        <h2>Welcome to the Front Page</h2>
        <div><TextField className='textField' hintText="Hint Text" floatingLabelText="Event Name" onChange={this.eventNameChangeHandler}/></div>
        <div>
          <TextField className='textField' hintText="Hint Text" floatingLabelText="Location" onChange={this.eventLocationChangeHandler}/>
          <TextField className='textField' hintText="Hint Text" floatingLabelText="Radius" onChange={this.eventRadiusChangeHandler}/>
        </div>
        <div><TextField hintText="Hint Text" floatingLabelText="Price"/></div>
        <RaisedButton label="Search" primary={true} onClick={this.clickButtonHandler}/>
        <div>
          <h1>Users</h1>
          {this.state.users.map(user => <div key={user.id}>{user.username}</div>)}
        </div>
        <TableView data={{tableData: this.state.data, listingData: this.state.eventListing}} />
      </div>
    )
  }
}

export default FrontPage;




