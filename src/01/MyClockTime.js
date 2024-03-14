import React, { useState, useEffect } from "react";

function MyClockTime() {
  const [current, setCurrent] = useState(new Date());
  const hours = current.getHours();
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  function tick() {
    setCurrent(new Date());
  }

  return (
    <div>
      <h1>Current Date : {current.getFullYear()}. {(current.getMonth()+1)< 10 ?
        "0" + (current.getMonth()+1) : (current.getMonth()+1)}. {current.getDate() < 10 ?
          "0" + current.getDate() : current.getDate()}. {getDayName(current)}</h1>
      <h1>
        Current Time : {hours < 12 ? "AM" : "PM"} {current.getHours() < 10 ?
        "0" + current.getHours() : current.getHours()}:
        {current.getMinutes() < 10 ?
        "0" + current.getMinutes() : current.getMinutes()}:
        {current.getSeconds() < 10 ?
          "0" + current.getSeconds()
          : current.getSeconds()}
      </h1>
    </div>
  );
}
function getDayName(date) {
  const dayNames = [
    "Sund",
    "Mond",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];
  return dayNames[date.getDay()];
}
export default MyClockTime;
