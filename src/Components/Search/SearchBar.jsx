import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { useHistory } from 'react-router';
import fn from '../../JavaScript/functions';
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

const SearchBar = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [filteredPokemons, setFilteredPokemons] = useState(null);
    const history = useHistory();

    useEffect(() => {
        fn.fetchAllPokemons(`pokemon?limit=898&offset=0`)
        .then(res=>{
            let dataArray = res.map(x=>({id:x.id, name:x.name, image: x.sprites.front_default}))
            return dataArray
        }).then(res=>{
            setPokemonList(res)
        })
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    
    const searchPokemon = (event) => {
        setTimeout(() => {
            let _filteredPokemons;
            if (!event.query.trim().length) {
                _filteredPokemons = [...pokemonList];
            }
            else {
                _filteredPokemons = pokemonList.filter((x) => {
                    return x.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
                console.log(_filteredPokemons)
            }
            setFilteredPokemons(_filteredPokemons);
        }, 250);
    }
    
    const keyPressedHandler = (event) =>{
        if(event.keyCode === 13) document.getElementById('searchPokemonBtn').click()
    }
    
    const searchHandler = (pokemon) =>{
            history.push(`/search-pokemon/${pokemon}`)
            setSelectedPokemon(null)
    }

    const itemTemplate = (item) => {
        return (
            <div className="pokemon-item" onClick={()=>{
                searchHandler(item.name)}} >
                <img className='pokemon-img' alt={item.name} src={item.image}   />
                <div className='pokemon-name'>{item.name}</div>
            </div>
        );
    }
    
    return (
        <div className="card">

            <h5>SEARCH OR SELECT POKEMON:</h5>
            <AutoComplete value={selectedPokemon}
            suggestions={filteredPokemons} 
            completeMethod={searchPokemon} 
            field="name" dropdown forceSelection 
            itemTemplate={itemTemplate}
            onChange={(e) => setSelectedPokemon(e.value)} 
            onKeyPress={(e)=>{keyPressedHandler(e)}}
            />
        </div>
    )
}

export default SearchBar;