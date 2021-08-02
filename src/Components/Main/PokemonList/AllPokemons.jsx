import { promises } from 'fs';
import React,{useState, useEffect} from 'react'
import PokeCard from '../../PokeCards/PokeCard';



const AllPokemons = () => {
    const[pokemonList, setPokemonList]=useState([])
    const[offset, setOffset] =useState(0);
    const[limit, setLimit] =useState(25);
    
    const fetchPokemon =async () =>{fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}?limit=${limit}`)
        .then(res=>{return res.json()
        })
        .then(res=>{
            let results = res.results;
            let array = results.map(x=> x.url)
            return array
        }).then(res=>{let pokemons = res.map(x=>fetch(x).then(res=>{
            return res.json()
        }))
        return Promise.all(pokemons)}).then(res=>{setPokemonList(res)})
    }

    useEffect(() => {
        fetchPokemon()
    }, [offset])

    return (
        <div className='cardsContainer'>
            {pokemonList?.map((pokemon)=>{return(<PokeCard key={pokemon.id} pokeId={pokemon.name} pokemonData={pokemon}/>)})}
        </div>
    )
}

export default AllPokemons
