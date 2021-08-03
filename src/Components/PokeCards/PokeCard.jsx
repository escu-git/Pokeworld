import React from 'react'
import '../../Styles/styles.css';
import pokeball from '../../assets/icons/pokeball.svg';

const PokeCard = ({pokemonData, pokeId}) => {
    const{id, name, sprites, types} = pokemonData;
    const image = sprites.other.dream_world.front_default;
    const pokeTypeColor = types[0].type.name;
    return (
        <div className={`pokeCard ${pokeTypeColor}`} id={pokeId}>
            {<img className='pokeCardPokeball'src={pokeball} alt='Pokeball'/>}
            <h2 className='pokeCardName'>#{id} {name}</h2>
            {<img src={image} alt={name} className='pokeCardImage'/>}
            <span className='pokeCardType'>{types[0].type.name}</span>
        </div>
    )
}


export default PokeCard
