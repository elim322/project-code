import React, { Component } from 'react';
import CalendarParents from './Calendar/CalendarVolunteers';
// import CalendarVolunteers from './Calendar/CalendarVolunteers';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parent: false,
    };
  }

  render() {
    return <CalendarParents />;
  }
}

export default Dashboard;
