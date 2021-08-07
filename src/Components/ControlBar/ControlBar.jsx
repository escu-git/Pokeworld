import React from 'react'
import PokemonTypes from '../Main/PokemonTypes/PokemonTypes'
import SearchBar from '../Search/SearchBar';

const ControlBar = () => {
    return (
        <div className='controlBar'>
            <PokemonTypes/>
            <SearchBar/>
        </div>
    )
}

export default ControlBar
