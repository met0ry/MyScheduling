import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar' 
import moment from 'moment'
import { useQuery } from "@apollo/client";
import EVENTS_QUERY from '../queries/events.graphql'


const CalendarContainer = () => {
  const localizer = momentLocalizer(moment);

  let events = [
    {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: moment().toDate(),
      end: moment().add(1, 'hour').toDate(),
    },
    {
      id: 1,
      title: 'Long Event',
      start: moment().toDate(),
      end: moment().add(2, 'hour').toDate(),
    }
  ]


  const { loading, error, data } = useQuery(EVENTS_QUERY);

  console.log(data)
  
  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      step={15}
      timeslots={4}
    />
  )
}

export default CalendarContainer;
