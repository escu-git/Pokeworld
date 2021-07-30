import React,{useState, useEffect} from 'react'
import '../../Styles/styles.css';
import PokeCard from '../PokeCards/PokeCard'

const MainContainer = () => {
    const[pokemon, setPokemon] = useState(null)
    let pokeArray=[];
    const fetchPokemons = async() =>{
        const pokeApi = await fetch('https://pokeapi.co/api/v2/pokemon')
        pokeApi.json().then(res=>{
            res.results.forEach(x=>pokeArray.push(x))
        })
    }
    useEffect(()=>{
        fetchPokemons();
        console.log(pokeArray)
        setPokemon(pokeArray);
    },[])
console.log(pokemon)
    return (
        <div>
            {pokemon?.map(pokemon=>{return(<PokeCard url={pokemon.url} name={pokemon.name}/>)})}
        </div>
    )
}

export default MainContainer;
