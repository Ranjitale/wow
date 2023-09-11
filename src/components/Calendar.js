// Calendar.js
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
            { title: 'Event 1', date: '2023-09-10' },
            { title: 'Event 2', date: '2023-09-15' },
            // Add more events here
          ]}
      />
    </div>
  );
};

export default Calendar;
