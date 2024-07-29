import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [pokemon, setPokemon] = useState({});
  const [id, setID] = useState(10)

  useEffect(() => {
    async function fetchData() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
        console.log('API fetched!', data);
    }

    fetchData();
    
  }, [id]);
  const onChangeHandler = (event)=>{
    setID(event.target.value)
  }


  return (
    <div>
      <input placeholder="Unesi id ili ime pokemona" onChange={onChangeHandler}/>
        <p>Name: {pokemon.name}</p>
        <img src={pokemon?.sprites?.other["official-artwork"]?.front_shiny}/>
    </div>
  );
};

export default Fetch;