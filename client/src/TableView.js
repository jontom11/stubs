import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {BrowserRouter as Link} from 'react-router-dom';


class TableView extends Component{
  constructor() {
    super();
    
    this.TableRowClickHandler = this.TableRowClickHandler.bind(this);
  }

  TableRowClickHandler() {
    console.log('TableRowClickHandler')
  }

  render() {
    return (
      <div>
        {console.log('TableView this.props.data', this.props.data.tableData)}
        <Table >
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
                {/*<TableRowColumn style={{width:'10%', whiteSpace: "normal", textAlign:'center'}}>{<Link to={`${event.id}`}>{event.id}</Link>}</TableRowColumn>*/}
                <TableRowColumn style={{width:'10%', whiteSpace: "normal", textAlign:'center'}}>{event.id}</TableRowColumn>
                <TableRowColumn style={{width:'30%', whiteSpace: "normal", wordWrap:'break-word', textAlign:'center'}}>{event.name}</TableRowColumn>'
                <TableRowColumn style={{width:'20%', whiteSpace: "normal", wordWrap:'break-word', textAlign:'center'}}>{event.venue.name+' - '+event.venue.city+', '+event.venue.state}</TableRowColumn>
                <TableRowColumn style={{width:'20%', whiteSpace: "normal", wordWrap:'break-word', textAlign:'center'}}>{event.eventDateLocal}</TableRowColumn>
                <TableRowColumn style={{width:'20%', whiteSpace: "normal", wordWrap:'break-word', textAlign:'center'}}>{event.ticketInfo}</TableRowColumn>
                <TableRowColumn style={{width:'10%', whiteSpace: "normal", wordWrap:'break-word', textAlign:'center'}}>{<a href={'http://www.stubhub.com/'+event.webURI}>Buy Here!</a>}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default TableView;