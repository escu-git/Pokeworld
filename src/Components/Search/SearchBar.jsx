import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {NavLink} from 'react-router-dom'

const SearchBar = () => {
    const[searchParam, setSearchParam]=useState(null)
    const keyPressedHandler = (event) =>{
        if(event.keyCode === 13) document.getElementById('searchPokemonBtn').click()
        console.log('ChangeHandler clickeado ✅')
    }

    console.log(searchParam)
    const searchHandler = () =>{
        if(searchParam === null) {
            alert('Añade info para buscar!')
            return
        }
        console.log('Search Handler clicked ✅')
        document.getElementById('searchBar').value=''
        setSearchParam(null)
    }


    return (
        <div className='searchForm'>
            <label for='searchBar'>SEARCH POKEMON:</label>
            <input 
                type='text' 
                id='searchBar' 
                name='searchBar' 
                placeholder='Search pokemon'
                autoComplete={false}
                onKeyDown={(event)=>keyPressedHandler(event)}
                onChange={(event)=>setSearchParam(event.target.value)}
            ></input>
            <NavLink to={`/search-pokemon/${searchParam}`}>
                <button id='searchPokemonBtn' onClick={()=>{searchHandler()}}>SEARCH POKEMON</button>
            </NavLink>

        </div>
    )
}



export default SearchBar
