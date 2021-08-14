import React, {createContext, useContext, useState, useEffect} from 'react';
export const showPokemonContext = createContext();
export const useShowPokemon = () => useContext(showPokemonContext);

export const PokemonTypeProvider = ({children}) =>{
    const[offset, setOffset] =useState(0);
    const[limit, setLimit] =useState(200);
    const[type, setType] =useState(null);
    const INITIAL_STATE = `pokemon?limit=${limit}&offset=${offset}`;
    const[pokemonSelection, setPokemonSelection]=useState(INITIAL_STATE);

    useEffect(()=>{
        console.log(pokemonSelection)
        
    },[])// eslint-disable-next-line react-hooks/exhaustive-deps

    return(
        <showPokemonContext.Provider value={{
        pokemonSelection, 
        setPokemonSelection,
        type, 
        setType, 
        limit, 
        setLimit, 
        offset, 
        setOffset}}>
            {children}
        </showPokemonContext.Provider>
    )
};
