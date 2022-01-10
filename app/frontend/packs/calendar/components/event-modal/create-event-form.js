import React, { useState } from "react";
import ReactDatePicker from 'react-datepicker'

const CreateEventForm = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [eventType, setEventType] = useState("Default");
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <React.Fragment>
      <div>
        <div className="itemLabel">
          {"startDate"}
        </div>
        <div className='inputWrapper'>
          <ReactDatePicker
            showTimeSelect
            minDate={new Date()}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            filterTime={filterPassedTime}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeIntervals={15}
          />
        </div>
      </div>  
      <div>
      <div className="itemLabel">
          {"endDate"}
        </div>
        <div className='inputWrapper'>
          <ReactDatePicker
            showTimeSelect
            minDate={new Date()}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            filterTime={filterPassedTime}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeIntervals={15}
          />
        </div>
      </div>
      {/* <div>
        Duration
      </div> */}
      <div>
        <div className="itemLabel">
          {"Event Type"}
        </div>
        <div className='inputWrapper'>
          <input type="text" value={eventType} onChange={(e) => setEventType(e.target.value)} />
        </div>  
      </div>
      <div>
        <div className="itemLabel">
          {"Title"}
        </div>
        <div className='inputWrapper'>
          <input type="text" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} />
        </div>
      </div>
      <div>
        <div className="itemLabel">
          {"Description"}
        </div>
        <div className='inputWrapper'>
          <input type="text" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
        </div>
      </div>
    </React.Fragment>
  )
};

export default CreateEventForm;