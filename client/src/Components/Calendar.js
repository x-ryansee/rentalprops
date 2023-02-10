import React from "react";

const Calendar = () => {


  return (
<div style={{ display: "flex", justifyContent: "space-between" }}>
<div style={{ width: "45%", padding: "1rem", paddingLeft: "4cm"}}>
    <a href="http://www.availcalendar.com/calendar/9419" target="_blank">
                Alpine Idyll Availability Calendar
        <iframe
                src="https://www.availcalendar.com/print/9419"
                width="100%"
                height="420"
                title="calendar"
                frameBorder="0"
                scrolling="no"
            />
    </a>
    </div>
    <div style={{ width: "45%", padding: "1rem" }}>
    <a href="http://www.availcalendar.com/calendar/9420" target="_blank">
                River Idyll Availability Calendar
            <iframe
                src="https://www.availcalendar.com/print/9420"
                width="100%"
                height="420"
                title="calendar"
                frameBorder="0"
                scrolling="no"
            />
        </a>
        </div>
</div>
  );
}

export default Calendar;
