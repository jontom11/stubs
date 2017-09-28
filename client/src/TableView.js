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


class TableView extends Component{
  constructor() {
    super();
    
    this.TableRowClickHandler = this.TableRowClickHandler.bind(this);
  }

  TableRowClickHandler() {
    console.log('TableRowClickHandler')
  }

  DateConverter(date){
    date = date.split('-')
    // let ampm = 'am';
    // if (Number(date[2].slice(3,4)) > 11) {
    //   ampm = 'pm';
    // }
    let reDate = date[1]+'/'+date[2].slice(0,2)+'/'+date[0]+'@'+date[2].slice(3,11)//+ampm
    return JSON.stringify(reDate)
  }

  render() {
    var trcStyle = {whiteSpace: "normal", wordWrap:'break-word', textAlign:'center'};

    return (
      <div>
        {console.log('TableView this.props.data', this.props.data.tableData)}
        {console.log('TableView this.props.ticketInfo', this.props.data.ticketInfo)}
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
            {this.props.data.tableData.map( (event, index) => (
              <TableRow key={event.id}>
                {/*<TableRowColumn style={{width:'10%', whiteSpace: "normal", textAlign:'center'}}>{<Link to={`${event.id}`}>{event.id}</Link>}</TableRowColumn>*/}
                <TableRowColumn style={trcStyle} width={'10%'}> {<Link to={'/'+event.id}>{event.id}</Link>} </TableRowColumn>
                <TableRowColumn style={trcStyle} width={'30%'}> {<Link to={'/'+event.id}>{event.name}</Link>}</TableRowColumn>
                <TableRowColumn style={trcStyle} width={'20%'}> {event.venue.name+' - '+event.venue.city+', '+event.venue.state}</TableRowColumn>
                <TableRowColumn style={trcStyle} width={'20%'}> {this.DateConverter(event.eventDateUTC)}</TableRowColumn>
                <TableRowColumn style={trcStyle} width={'20%'}>  {'$'+this.props.data.ticketInfo[index].ticketInfo.minListPrice}  </TableRowColumn>
                <TableRowColumn style={trcStyle} width={'10%'}>{<a href={'http://www.stubhub.com/'+event.webURI}>Buy Here!</a>}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default TableView;