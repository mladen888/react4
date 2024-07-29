import React from 'react';
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"

const SingleProfile = () => {
    const params = useParams()
  return (
    <div>
        <h1>Profil: {params.profilesId} </h1>
        <Link to="/profiles">vrati se na proslu stranicu</Link>
    </div>
  );
};

export default SingleProfile