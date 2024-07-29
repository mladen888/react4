import React, { useRef } from 'react';

const ToggleVisibility = () => {
    const divRef = useRef(null);

    const toggleDiv = () => {
        if (divRef.current) {
            divRef.current.style.display = divRef.current.style.display === 'none' ? 'block' : 'none';
        }
    };

    return (
        <div>
            
            <div 
                ref={divRef} 
                style={{ background: 'red', height: '100px', width: '100px' }}
            ></div>
         
            <button onClick={toggleDiv}>Klikni da toggleujes div</button>
        </div>
    );
};

export default ToggleVisibility;
