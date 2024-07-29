import React, { useRef, useState } from 'react';

const DynamicFontSize = () => {
  const paragraphRef = useRef(null)
  const [fontSize, setFontSize] = useState(0)

  const increaseFontSize = () => {
    const newSize = fontSize + 2
    setFontSize(newSize)
  
  }

  return (
    <div>
      <p ref={paragraphRef} style={{ fontSize: `${fontSize}px` }}>Povecaj ovaj tekst</p>
      <button onClick={increaseFontSize}>Klikni dugme</button>
    </div>
  );
};

export default DynamicFontSize;
