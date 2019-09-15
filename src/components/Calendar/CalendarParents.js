import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import LearnerDetails from '../Modal/LearnerDetailsModal';
// import ModalComponent from './Modal';

import '../../scss/styles.scss';

export default class CalendarParents extends React.Component {
  calendarComponentRef = React.createRef();
  state = {
    isModalOpen: false,
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      {
        title: 'Python',
        start: Date.parse('16 Sep 2019 16:00:00 PDT'),
        end: Date.parse('16 Sep 2019 17:00:00 PDT'),
        volunteer: 'Timothy',
      },
      {
        title: 'Scratch - Beginner',
        start: Date.parse('15 Sep 2019 18:00:00 PDT'),
        end: Date.parse('15 Sep 2019 20:00:00 PDT'),
        volunteer: 'Timothy',
      },
      {
        title: 'Scratch - Advanced',
        start: Date.parse('19 Sep 2019 12:00:00 PDT'),
        end: Date.parse('19 Sep 2019 13:00:00 PDT'),
        volunteer: 'Timothy',
      },
      {
        title: 'Python',
        start: Date.parse('20 Sep 2019 09:00:00 PDT'),
        end: Date.parse('16 Sep 2019 10:00:00 PDT'),
        volunteer: 'Timothy',
      },
    ],
    title: '',
    start: '',
    end: '',
    volunteer: '',
  };

  openModal = info => {
    this.setState({
      isModalOpen: true,
      title: info.event.title,
      start: info.event.start,
      end: info.event.end,
      volunteer: info.event.volunteer,
    });
  };

  render() {
    return (
      <div className="demo-app">
        <div className="demo-app-top">
          <button onClick={this.toggleWeekends}>toggle weekends</button>&nbsp;
          <button onClick={this.gotoPast}>go to a date in the past</button>
        </div>
        <div className="demo-app-calendar">
          <FullCalendar
            defaultView="timeGridWeek"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'null',
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            eventClick={info => {
              this.openModal(info);
            }}
          />
          {this.state.isModalOpen && <LearnerDetails info={this.state} />}
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
