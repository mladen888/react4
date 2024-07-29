import React, { useRef } from 'react';

const SmoothScroll = () => {
  const scrollToRef = useRef(null)

  const scrollToSection = () => {
    if (scrollToRef.current) {
        scrollToRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  };

  return (
    <div>
      <button onClick={scrollToSection}>Scroll to Section</button>
      <div style={{ height: '100vh' }}>Scroll down to see the section.</div>
      <div ref={scrollToRef}>Scroll...Scroll...{<br></br>} Scroll...Scroll...{<br></br>} Scroll...Scroll...{<br></br>} Scroll...Scroll...{<br></br>} Scroll...Scroll...{<br></br>} Scroll...Scroll...</div>
    </div>
  );
};

export default SmoothScroll;
