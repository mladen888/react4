import React, { useState, useEffect } from 'react';

const AutoSaveForm = () => {
  const [input, setInput] = useState('');
  //PONOVITI KUCI
  useEffect(() => {
    const savedInput = localStorage.getItem('autoSaveFormInput');
    if (savedInput) {
      setInput(savedInput);
    }
  }, []);

  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      localStorage.setItem('autoSaveFormInput', input);
      console.log('Auto-saved:', input);
    }, 2000);

    return () => {
      clearInterval(autoSaveInterval);
    };
  }, [input]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h2>Auto-Save Form</h2>
      <textarea value={input} onChange={handleInputChange} placeholder="Start typing..." rows={5} cols={50}/>
    </div>
  );
};

export default AutoSaveForm;
