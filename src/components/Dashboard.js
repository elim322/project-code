import React, { Component } from 'react';
import CalendarParents from './Calendar/CalendarParents';
// import CalendarVolunteers from './Calendar/CalendarVolunteers';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parent: false,
    };
  }

  render() {
    return (
      // <div>
      //   {
      //     (this.state.parent = true ? (
      //       <CalendarParents />
      //     ) : (
      //       <CalendarVolunteers />
      //     ))
      //   }
      // </div>
      <CalendarParents />
    );
  }
}

export default Dashboard;
