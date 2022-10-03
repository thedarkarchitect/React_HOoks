import React, { useState } from "react";

function App() {
  //tHIS is the react hook method
  const [currentTime, time] = useState("Time");

  //this function gets the date inserts it as a argument to the hook function
  function updateTime() {
    let gettime = new Date().toLocaleTimeString("it-IT");
    time(gettime);
  }
  //makes the settime function count every one second
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
