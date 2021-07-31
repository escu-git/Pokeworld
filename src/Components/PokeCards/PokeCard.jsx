import React, {useEffect, useState} from 'react'
import '../../Styles/styles.css';
import stylesFn from '../../JavaScript/dynamicStyles';
import pokeball from '../../assets/icons/pokeball.svg';

const PokeCard = ({pokemonData, key}) => {
    const{id, name, sprites, types} = pokemonData;
    return (
        <div className='pokeCard' id={key}>
            <img className='pokeCardPokeball'src={pokeball} alt='Pokeball'/>
            <h2 className='pokeCardName'>#{id} {name}</h2>
            <img src={sprites.front_default} alt={name} className='pokeCardImage'/>
            <span className='pokeCardType'>{types[0].type.name}</span>
        </div>
    )
}


export default PokeCard
