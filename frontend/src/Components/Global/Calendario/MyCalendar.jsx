import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './calendario.css'

// Você pode usar qualquer localizador de data, mas moment.js é recomendado.
const localizer = momentLocalizer(moment);

class MyCalendar extends React.Component {
  state = {
    events: [
      {
        title: 'Reunião',
        start: new Date(),
        end: new Date(new Date().setHours(new Date().getHours() + 1)),
      },
    ],
  };

  render() {
    return (
      <div className="my-calendar">
        <Calendar
          localizer={localizer}
          events={this.state.events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    );
  }
}

export default MyCalendar;
