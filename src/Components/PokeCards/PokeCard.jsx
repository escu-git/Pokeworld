import React from 'react'
import '../../Styles/styles.css';

const PokeCard = (url, name) => {
    console.log(url)
    return (
        <div className='pokeCard'>
            <img src={url} alt={name} className='pokeImage'/>
            <span className='pokeCardName'>{name}</span>
        </div>
    )
}

export default PokeCard
