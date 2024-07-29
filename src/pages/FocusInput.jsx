import React, { useRef, useEffect } from 'react';

const FocusInput = () => {

  const inputRef = useRef(null);


  useEffect(() => {
      inputRef.current.focus();
  }, [])

  return (
    <div>
      <p>Focus Input:</p>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default FocusInput;
