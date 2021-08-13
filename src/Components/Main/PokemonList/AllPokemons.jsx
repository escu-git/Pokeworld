import React,{useState, useEffect} from 'react';
import PokeCard from '../../PokeCards/PokeCard';
import Loading from '../../Loading/Loading';
import { useShowPokemon } from '../../../Contexts/PokeContext';
import fn from '../../../JavaScript/functions';

const AllPokemons = () => {
    const[pokemonList, setPokemonList]=useState([]);
    const[loading, setLoading]=useState(null);
    const usePokemon = useShowPokemon();
    const {pokemonSelection,limit, offset}= usePokemon;

    const allPokemons =() =>{
        setLoading(true);
       try{ 
        fn.fetchAllPokemons(
            pokemonSelection, 
            limit, 
            offset
        ).then(res=>{setPokemonList(res) 
            setLoading(false);
        })
        }catch(err){
            console.log(err)
        };
    };

    useEffect(() => {
        allPokemons()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemonSelection]);
    console.log(pokemonList)

    return (
        <div className='cardsContainer'>
            {loading? <Loading/> : pokemonList?.map((pokemon)=>{return(<PokeCard key={pokemon.id} pokeId={pokemon.name} pokemonData={pokemon}/>)})}
        </div>
    )
}

export default AllPokemons
