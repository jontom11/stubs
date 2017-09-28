import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {Link} from 'react-router-dom';


class EventPage extends Component {
  constructor(props){
    super();
  }

  render() {
    var trcStyle = {whiteSpace: "normal", wordWrap:'break-word', textAlign:'center'};

    return(
      <div>
        Welcome to the Event Page for event #
          {console.log('event Page props',this.props)}
        {/*{this.props.match.params.eventId}*/}
        {/*<h3>{this.props.match.params.eventId}</h3>*/}
        {/*<Table >
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow >
              <TableHeaderColumn style={{width:'10%', textAlign:'center'}}>ID</TableHeaderColumn>
              <TableHeaderColumn style={{width:'30%', textAlign:'center'}}>Name</TableHeaderColumn>
              <TableHeaderColumn style={{width:'20%', textAlign:'center'}}>Venue</TableHeaderColumn>
              <TableHeaderColumn style={{width:'20%', textAlign:'center'}}>Date</TableHeaderColumn>
              <TableHeaderColumn style={{width:'20%', textAlign:'center'}}>ticketInfo</TableHeaderColumn>
              <TableHeaderColumn style={{width:'10%', textAlign:'center'}}>BUY IT!</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} onCellClick={this.TableRowClickHandler}> 
            {this.props.data.tableData.map(event => (
              <TableRow key={event.id}>
                <TableRowColumn style={trcStyle} width={'10%'}> {<Link to={'/'+event.id}>{event.id}</Link>} </TableRowColumn>
                <TableRowColumn style={trcStyle} width={'30%'}> {<Link to={'/'+event.id}>{event.name}</Link>}</TableRowColumn>
                <TableRowColumn style={trcStyle} width={'20%'}> {event.venue.name+' - '+event.venue.city+', '+event.venue.state}</TableRowColumn>
                <TableRowColumn style={trcStyle} width={'20%'}> {this.DateConverter(event.eventDateUTC)}</TableRowColumn>
                <TableRowColumn style={trcStyle} width={'20%'}> {<Link to={'/'+event.id}>{event.ticketInfo}</Link>}</TableRowColumn>
                <TableRowColumn style={trcStyle} width={'10%'}>{<a href={'http://www.stubhub.com/'+event.webURI}>Buy Here!</a>}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>*/}
      </div>
    )
  }
}

export default EventPage;

