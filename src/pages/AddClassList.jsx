import React, { useRef, useState } from 'react';
import './app.css'; 

const AddClassOnClick = () => {
  const divRef = useRef(null);
  const [isClassAdded, setIsClassAdded] = useState(false)

  const addClass = () => {
    if (divRef.current) {
      divRef.current.classList.add('new-class')
      setIsClassAdded(true)
    }
  };

  return (
    <div>
      <div ref={divRef} className={isClassAdded ? 'new-class' : ''}>This is a div element.</div>
      <button onClick={addClass}>Add Class</button>
    </div>
  );
};

export default AddClassOnClick;

