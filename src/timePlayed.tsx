import React, { useState, useEffect } from 'react';
type str = string; type num = number

function Time({ rolls }:any) {
  const [mins, setMins] = useState(() => {
    const savedMins = localStorage.getItem('mins');
    return savedMins !== null ? JSON.parse(savedMins) : 0;
  });
  
  const [hours, setHours] = useState(() => {
    const savedHours = localStorage.getItem('hours');
    return savedHours !== null ? JSON.parse(savedHours) : 0;
  });

  useEffect(() => {
    localStorage.setItem('mins', JSON.stringify(mins));
    localStorage.setItem('hours', JSON.stringify(hours));
  }, [mins, hours]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMins((prevMins:num) => {
        const newMins = prevMins + 1;
        if (newMins >= 60) {
          setHours((prevHours:num) => prevHours + 1);
          return 0;
        }
        return newMins;
      });
    }, 60000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="timerContainer">
      <span id="time">TimePlayed:</span>
      <span id="timePlayed">
        {String(hours).padStart(2, '0')}h:{String(mins).padStart(2, '0')}
      </span>
      <span id='time'>Roll's: </span>
      <span id="timePlayed">{rolls}</span>
    </div>
  );
}

export default Time;