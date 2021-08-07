import React, {useState, useEffect} from 'react'
import { useShowPokemon } from '../../../Contexts/PokeContext';
import { useParams } from 'react-router';
import Loading from '../../Loading/Loading';
import PokeCard from '../../PokeCards/PokeCard';
import fn from '../../../JavaScript/functions';

const FilteredByType = () => {
    let {id} = useParams()
    const[filteredPokemons, setFilteredPokemons]=useState(null)
    const[loading, setLoading]=useState(null)
    const usePokemon = useShowPokemon();
    const{limit, offset} = usePokemon;

    const filterPokemons = () =>{
        setLoading(true)
        fn.fetchFilteredPokemons(id, limit, offset)
        .then(res=>setFilteredPokemons(res))
        .then(res=>setLoading(false))
    }

    useEffect(()=>{
        filterPokemons()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])
    
    return (
        <div className='cardsContainer'>
            {loading? <Loading/> : filteredPokemons?.map((pokemon)=>{return(<PokeCard key={pokemon.id} pokeId={pokemon.name} pokemonData={pokemon}/>)})}
        </div>
    )
}

export default FilteredByType
