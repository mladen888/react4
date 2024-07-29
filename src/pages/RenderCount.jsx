import React, { useRef, useState } from 'react';

const RenderCount = () => {

  const renderCountRef = useRef(0);
  
  const [count, setCount] = useState(0);
  
  const increaseCount = () => {
      setCount(prev => prev + 1);
    };
    
    renderCountRef.current = count

  return (
    <div>
      <button onClick={increaseCount}>Klikni da povecas count: {count}</button>
      <p>Render Count: {renderCountRef.current}</p>
    </div>
  );
};

export default RenderCount;
