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
    <h1>
      Current Time : {hours < 12 ? "AM" : "PM"} {current.getHours() < 10 ?
      "0" + current.getHours() : current.getHours()}:
      {current.getMinutes() < 10 ?
      "0" + current.getMinutes : current.getMinutes()}:
      {current.getSeconds() < 10 ? 
        "0" + current.getSeconds()
        : current.getSeconds()}
    </h1>
  );
}

export default MyClockTime;
