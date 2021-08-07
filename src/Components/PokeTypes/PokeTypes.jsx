import React from 'react'
import { NavLink } from 'react-router-dom';

const PokeTypes = ({pokeData, clickHandler}) => {
    let pokeTypeColor = pokeData.name;
    return (
        <NavLink to={`/filtered-pokemons/${pokeData.name}`} style={{textDecoration:'none', color:'inherit'}}>
        <div className={`typeCard ${pokeTypeColor}`}>
            {pokeData.name} 
        </div>
        </NavLink>
    )
}

export default PokeTypes
