import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class TableView extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {data: this.props.tableData};
//   }
  render() {
    return (
      <div>
        This is where the Table goes!
        {console.log(this.props.tableData)}
        <Table adjustForCheckbox='false'>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Venue</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody> 
            {this.props.tableData.map(event => (
              <TableRow>
                <TableRowColumn>{event.id}</TableRowColumn>
                <TableRowColumn>{event.name}</TableRowColumn>
                <TableRowColumn>{event.venue.name}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default TableView;