import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar' 
import moment from 'moment'
import { useQuery } from "@apollo/client";
import EVENTS_QUERY from '../queries/events.graphql'
import 'moment/locale/uk';
import CreateEventModal from "../components/event-modal/create-event-modal";

const CalendarContainer = () => {
  moment.locale('uk');

  const [isOpen, setIsOpen] = useState(false);
      
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

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title)
      setEvents([
          ...events,
          {
            start,
            end,
            title,
          },
        ],
      )
  }

  return (
    <main>
      <Calendar
        localizer={localizer}
        events={events || []}
        startAccessor={(e) => moment(e.startDt).toDate()}
        endAccessor={(e) => moment(e.endDt).toDate()}
        step={15}
        timeslots={4}
        dayLayoutAlgorithm={"no-overlap"}
        formats={formats}
        style={{height: "calc(100vh - 130px)"}}
        scrollToTime={moment().hours(9).minutes(59).seconds(30).toDate()}
        defaultView={"week"}
        selectable
        onSelectSlot={handleSelect}
      />
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <CreateEventModal setIsOpen={setIsOpen} />}
    </main>
  )
}

export default CalendarContainer;
