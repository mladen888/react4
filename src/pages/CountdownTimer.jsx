import React, { useState, useEffect } from 'react';

const CountDownTimer = () => {
  const [inputSeconds, setInputSeconds] = useState('');
  const [seconds, setSeconds] = useState(null);
  const [isCountingDown, setIsCountingDown] = useState(false);
// KOD KUCE SVE OPET URADITI
  useEffect(() => {
    if (isCountingDown && seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (seconds === 0) {
      setIsCountingDown(false);
    }
  }, [isCountingDown, seconds]);

  const handleInputChange = (event) => {
    setInputSeconds(event.target.value);
  };

  const startCountdown = () => {
    setSeconds(parseInt(inputSeconds, 10));
    setIsCountingDown(true);
  };

  return (
    <div>
      <input type="number" value={inputSeconds} onChange={handleInputChange} placeholder="Enter seconds"/>
      <button onClick={startCountdown}>Start</button>
      {<p>{seconds} seconds remaining</p>}
    </div>
  );
};

export default CountDownTimer
