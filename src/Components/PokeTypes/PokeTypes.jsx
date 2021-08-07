import React from 'react'

const PokeTypes = ({pokeData, clickHandler}) => {
    let pokeTypeColor = pokeData.name;
    return (
        <div className={`typeCard ${pokeTypeColor}`} onClick={()=>clickHandler(pokeData.name)}>
            {pokeData.name} 
        </div>
    )
}

export default PokeTypes
