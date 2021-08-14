import React from 'react'
import { useHistory } from 'react-router';
import '../../Styles/styles.css';
import pokeball from '../../assets/icons/pokeball.svg';

const PokeCard = ({pokemonData, pokeId}) => {
    const{id, name, sprites, types} = pokemonData;
    const history = useHistory();
    const dreamWorldImage = sprites.other.dream_world.front_default;
    const defaultImage = sprites.other["official-artwork"].front_default;
    let image = dreamWorldImage == null? defaultImage : dreamWorldImage ;
    const pokeTypeColor = types[0].type.name;
    
        const typeClickHandler= (route) =>{
            history.push(route)
        };

        const cardClickHandler = (id) =>{
            history.push(`/search-pokemon/${id}`);
        };

        // const availableSprites = [
        //     {id:'',image:sprites.other.dream_world.front_default},
        //     {id:'', image:sprites.other["official-artwork"].front_default},
        //     {id:''}
        // ]

    return (
        <div className={`pokeCard ${pokeTypeColor}`} id={pokeId}>
            {<img className='pokeCardPokeball' src={pokeball} alt='Pokeball'/>}
            <div className='pokeNumber'>#{id}</div>
            <h2 className='pokeCardName'>{name}</h2>
            {<img src={image} alt={name} className='pokeCardImage' onClick={()=>cardClickHandler(name)}/>}
            <div className='pokeCardType' onClick={()=>typeClickHandler(`/filtered-pokemons/${types[0].type.name}`)}> {types[0].type.name}</div>
        </div>
    )
};

export default PokeCard
