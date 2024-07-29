import React, { useState, useRef } from 'react'

function Stopwatch() {
  const [elapsedTime, setElapsedTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  const startStopwatch = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 10)
      }, 10);
      setIsRunning(true)
    }
  };

  const stopStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current)
      setIsRunning(false)
    }
  };



  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor((time % 60000) / 1000)
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  };

  return (
    <div>
      <h2>{formatTime(elapsedTime)}</h2>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={stopStopwatch}>Stop</button>
    </div>
  );
}

export default Stopwatch;