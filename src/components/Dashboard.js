import React, { Component } from 'react';
import CalendarParents from './Calendar/CalendarParents';
import CalendarVolunteers from "./Calendar/CalendarVolunteers";

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let volunteer = params.get('v');

    if (volunteer) {
      return (
          <CalendarVolunteers/>
      )
    } else {
      return (
          <CalendarParents/>
      )
    }
  }
}

export default Dashboard;
