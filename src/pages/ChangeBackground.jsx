import React, { useRef, useState } from 'react'

const ChangeBackgroundColor = () => {
    
    const divRef = useRef(null)

    
    const [color, setColor] = useState('#242424')

    
    const changeColor = () => {
        const newColor = color === '#242424' ? 'yellow' : '#242424'
        
        setColor(newColor)
        
        if (divRef.current) {
            divRef.current.style.backgroundColor = newColor
        }
    };

    return (
        <div>
            
            <div 
                ref={divRef} 
                style={{height: '100px', width: '100px', border: 'solid 1px' }}>
                
            </div>
           
            <button onClick={changeColor}>
                Change Background Color
            </button>
        </div>
    );
};

export default ChangeBackgroundColor
