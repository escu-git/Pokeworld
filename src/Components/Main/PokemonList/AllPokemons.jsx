import React,{useState, useEffect} from 'react';
import PokeCard from '../../PokeCards/PokeCard';
import Loading from '../../Loading/Loading';

const AllPokemons = () => {
    const[pokemonList, setPokemonList]=useState([])
    const[offset, setOffset] =useState(0);
    const[limit, setLimit] =useState(100);
    const[loading, setLoading]=useState(null);
    
    const fetchPokemon =async () =>{
        setLoading(true)
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res=>{return res.json()
        })
        .then(res=>{
            let results = res.results;
            let array = results.map(x=> x.url)
            return array
        }).then(res=>{let pokemons = res.map(x=>fetch(x).then(res=>{
            return res.json()
        }))
        return Promise.all(pokemons)}).then(res=>{setPokemonList(res) 
            console.log(pokemonList)
            setLoading(false);})
    }

    useEffect(() => {
        fetchPokemon();
    }, [])
    

    return (
        <div className='cardsContainer'>
            {loading? <Loading/> : pokemonList?.map((pokemon)=>{return(<PokeCard key={pokemon.id} pokeId={pokemon.name} pokemonData={pokemon}/>)})}
        </div>
    )
}

export default AllPokemons
