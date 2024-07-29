import React from 'react';
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div>
      <p>Home Page</p>
      <Link to='/about'>Idi na about us stranicu</Link>
      <br></br>
      <Link to='/profiles'>Idi na profiles stranicu</Link>
      <br></br>
      <Link to='/focusinput'>Idi na 1. zadatak</Link>
      <br></br>
      <Link to='/prev'>Idi na 2. zadatak</Link>
      <br></br>
      <Link to='/render'>Idi na 3.  zadatak</Link>
      <br></br>
      <Link to='/colors'>Idi na 4. zadatak</Link>
      <br></br>
      <Link to='/stopwatch'>Idi na 5. zadatak</Link>
      <br></br>
      <Link to='/fetch'>Idi na 6. zadatak</Link>
      <br></br>
      <Link to='/countdowntimer'>Idi na 7. zadatak</Link>
      <br></br>
      <Link to='/autosaveform'>Idi na 8. zadatak</Link>
      <br></br>
      <Link to='/clickcounter'>Idi na 9. zadatak</Link>
      <br></br>
      <Link to='/changebackground'>Idi na 10. zadatak</Link>
      <br></br>
      <Link to='/toggle'>Idi na 11. zadatak</Link>
      <br></br>
      <Link to='/addclass'>Idi na 12. zadatak</Link>
      <br></br>
      <Link to='/smooth'>Idi na 13. zadatak</Link>
    </div>
  );
};

export default Home