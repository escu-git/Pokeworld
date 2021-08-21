import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import PokemonTypes from '../Main/PokemonTypes/PokemonTypes'
import SearchBar from '../Search/SearchBar';
import HideShowBtn from './HideShowBtn';
import ShowAllBtn from './ShowAllBtn';

const ControlBar = () => {
    const history = useHistory();
    const[visible, setVisible]=useState(false);

    const visibleHandler = () =>{
        setVisible(!visible)
    }

    const clickHandler=()=>{
        history.push('/pokemons/all')
    }
    return (
        <div className={`controlBar ${visible? 'visible' : 'invisible'}`} >
            {visible? <ShowAllBtn fn={clickHandler}/>:null}
            <PokemonTypes show={visible}/>
            {visible? <SearchBar/> : null }
            <HideShowBtn state={visible} fn={visibleHandler}/>
        </div>
    )
}


export default ControlBar
