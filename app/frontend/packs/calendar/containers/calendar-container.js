import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar' 
import moment from 'moment'
import { useQuery } from "@apollo/client";
import EVENTS_QUERY from '../queries/events.graphql'


const CalendarContainer = () => {
  const localizer = momentLocalizer(moment);

  // TODO maybe move to wrapper ???

  const [events, setEvents] = useState([]);

  const { loading, error, data } = useQuery(EVENTS_QUERY, {
    onCompleted: (data) => {
      setEvents(data.events);
    }
  });

  console.log(events)

  const formats = {
    eventTimeRangeFormat: () => { 
      return "";
    },
  };
  
  return (
    <Calendar
      localizer={localizer}
      events={events || []}
      startAccessor={(e) => moment(e.startDt).toDate()}
      endAccessor={(e) => moment(e.endDt).toDate()}
      step={15}
      timeslots={4}
      dayLayoutAlgorithm={"no-overlap"}
      formats={formats}
    />
  )
}

export default CalendarContainer;
