import React from 'react'
import { useHistory } from 'react-router-dom';
import PokemonTypes from '../Main/PokemonTypes/PokemonTypes'
import SearchBar from '../Search/SearchBar';

const ControlBar = () => {
    const history = useHistory();

    const clickHandler=()=>{
        history.push('/pokemons/all')
    }
    
    return (
        <div className='controlBar'>
            <PokemonTypes/>
            <div>
                <button onClick={()=>clickHandler()}>TODOS</button>
            </div>
            <SearchBar/>
        </div>
    )
}

export default ControlBar
