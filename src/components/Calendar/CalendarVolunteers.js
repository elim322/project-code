import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import LearnerDetails from '../Modal/LearnerDetailsModal';

import '../../scss/styles.scss';

export default class CalendarVolunteers extends React.Component {
  calendarComponentRef = React.createRef();
  state = {
    isModalOpen: false,
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { title: 'Today', start: new Date() },
    ],
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  render() {
    return (
      <div className="demo-app">
        <div className="demo-app-top">
          <button className="schedule-button" onClick={this.openModal}>
            Schedule
          </button>
        </div>
        {this.state.isModalOpen && <LearnerDetails />}
        <div>
          <FullCalendar
            className="calendar"
            defaultView="dayGridWeek"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'null',
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            eventClick={(lol) => {console.log("yay "+lol.event.title)}}
          />
        </div>
      </div>
    );
  }

  toggleWeekends = () => {
    this.setState({
      // update a property
      calendarWeekends: !this.state.calendarWeekends,
    });
  };

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  };
}
