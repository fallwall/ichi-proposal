import React, { useState } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [start, setStart] = useState(0);

  let timer = 0;

  const startTimer =()=> {
    setIsOn(isOn);
    setTime(0);
    setStart(Date.now() - time);

   timer = setInterval(() =>
      setTime(Date.now() - start), 1);
  }
  const stopTimer =()=> {
    setIsOn(false);
    clearInterval(timer);
  }

  const resetTimer = () => {
    setTime(0);
    setIsOn(false);
  }

  let starts = (time === 0) ?
      <button onClick={startTimer}>start</button> :
      null
  let stop = (time === 0 || isOn) ?
      null :
      <button onClick={stopTimer}>stop</button>
  let resume = (time === 0 || isOn) ?
      null :
      <button onClick={startTimer}>resume</button>
  let reset = (time === 0 || isOn) ?
      null :
    <button onClick={resetTimer}>reset</button>
  
 const msToTime=(s)=> {

      // Pad to 2 or 3 digits, default is 2
      function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
      }
    
      var ms = s % 1000;
      s = (s - ms) / 1000;
      var secs = s % 60;
      s = (s - secs) / 60;
      var mins = s % 60;
      var hrs = (s - mins) / 60;
    
      return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
 }
  console.log(timer);

  return (
    <div>
       <div className="timer">
        {/* <h3>timer: {msToTime(time)}</h3> */}
        {/* <h3>timer: {time}</h3> */}
        {starts}
        {resume}
        {stop}
        {reset}
      </div>
    </div>
  )
}
