import React, { useRef, useState } from 'react';

const ChangeColor = () => {
 const colorRef = useRef(null);
 const [color, setColor] = useState('blue');

 function changeColor() {
   const newColor = color === 'blue' ? 'red' : 'blue';
   setColor(newColor);
   colorRef.current = color
 }

 return (
   <div>
     <button onClick={changeColor} style={{color: colorRef.current}}> Change Color </button>
   </div>
 );
};

export default ChangeColor;