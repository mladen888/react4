import React, { useRef, useState } from 'react';

const PreviousState = () => {
  const prevValueRef = useRef(null)
  const [currentValue, setCurrentValue] = useState('current') 


  const handleChange = () => {
    
    prevValueRef.current = currentValue
 
    setCurrentValue(currentValue === 'current' ? 'newValue' : 'current')
  };

  return (
    <div>
      <button onClick={handleChange}> Change Values </button>
      <p>Previous Value: {prevValueRef.current}</p>
      <p>Current value: {currentValue}</p>
    </div>
  );
};

export default PreviousState;
