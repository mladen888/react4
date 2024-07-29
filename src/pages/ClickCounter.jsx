import React, { useRef } from 'react';

const ClickCounter = () => {

  const renderCountRef = useRef(0);
  
  const increaseCount = () => {
         renderCountRef.current +=1
        console.log('Render: ',renderCountRef.current)
    };
    
  return (
    <div>
      <button onClick={increaseCount}>Klikni da povecas count</button>
    </div>
  );
};
export default ClickCounter