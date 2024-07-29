import React from 'react';
import {Link} from "react-router-dom"
const Profiles = () => {

    const profiles = [1,2,3]

  return (
    <div>
            {
                profiles.map((name, key) =>{
                    return(
                        <div key ={key}>
                            <p>Profil: {name}</p>
                            <Link to={`/profiles/${name}`}>Idi na profiles stranicu</Link>
                        </div>
                        
                    )
                })
            }
    </div>
  );
};

export default Profiles